<?php
/**
 * Plugin Name: Reinvent Digital — Content Write API
 * Description: Adds authenticated POST and DELETE routes to the existing
 *              reinvent/v1 page endpoints (services, industries, locations,
 *              resources, about, contact, case-studies), so content can be pushed into
 *              WordPress in the same JSON shape the GET routes already return.
 * Version:     1.0.0
 * Author:      Reinvent Digital
 *
 * ---------------------------------------------------------------------------
 * HOW IT WORKS
 *
 * The existing GET routes are left untouched. This plugin:
 *
 *   1. Adds, next to each existing GET route:
 *        POST   /wp-json/reinvent/v1/<collection>          upsert one or many (by slug)
 *        DELETE /wp-json/reinvent/v1/<collection>/<slug>   remove a pushed entry
 *      Both require a logged-in user who can edit posts — use an Application
 *      Password (Users → Profile → Application Passwords) with Basic auth.
 *
 *   2. Stores each pushed entry as JSON (one option per collection).
 *
 *   3. Overlays the stored entries onto the existing GET responses: an entry
 *      with the same slug is merged over the original (pushed fields win,
 *      fields you didn't send are kept); a new slug is appended. So the
 *      frontend sees pushed content with no frontend change.
 *
 * POST body — any of these:
 *   { "slug": "google-ads", ... }                       one entry
 *   [ { "slug": ... }, { "slug": ... } ]                many
 *   { "services": [ { "slug": ... }, ... ] }            the GET's own shape
 *
 * Response: { "results": [ { "slug": "...", "status": "created|updated|error", "message": "..." } ] }
 *
 * Install: copy into wp-content/plugins/ and activate. No other setup.
 * ---------------------------------------------------------------------------
 */

if (!defined('ABSPATH')) {
    exit;
}

/** The collections this plugin makes writable. Key = route segment = response key. */
function rd_cw_collections() {
    return ['services', 'industries', 'locations', 'resources', 'about', 'contact'];
}

function rd_cw_option($collection) {
    return 'rd_cw_' . $collection;
}

/** Stored entries for a collection, as [slug => entry]. */
function rd_cw_get($collection) {
    $stored = get_option(rd_cw_option($collection), []);
    return is_array($stored) ? $stored : [];
}

function rd_cw_set($collection, array $entries) {
    // autoload off: these can be large and are only needed on API requests.
    update_option(rd_cw_option($collection), $entries, false);
}

/** Slugs are lowercase words with hyphens; resources also use "resources/blogs". */
function rd_cw_valid_slug($slug) {
    return is_string($slug) && $slug !== '' && preg_match('#^[a-z0-9-]+(/[a-z0-9-]+)*$#', $slug);
}

/**
 * Who may write: a logged-in user who can edit posts (browser session or
 * Application Password), OR a request carrying the secret push token in an
 * `X-RD-Token` header. The token is for hosts that strip the Authorization
 * header; set it in wp-config.php:  define('RD_PUSH_TOKEN', '<long random string>');
 */
function rd_cw_can_write($request = null) {
    if (current_user_can('edit_posts')) {
        return true;
    }
    if (!defined('RD_PUSH_TOKEN') || !is_string(RD_PUSH_TOKEN) || strlen(RD_PUSH_TOKEN) < 32) {
        return false;   // token auth is off unless a strong token is configured
    }
    $sent = $request instanceof WP_REST_Request ? (string) $request->get_header('x-rd-token') : '';
    return $sent !== '' && hash_equals(RD_PUSH_TOKEN, $sent);
}

/* ------------------------------------------------------------------ *
 * 1. Routes
 * ------------------------------------------------------------------ */
add_action('rest_api_init', function () {
    foreach (rd_cw_collections() as $collection) {
        // Registering a POST on the same path merges with the existing GET.
        register_rest_route('reinvent/v1', '/' . $collection, [
            'methods'             => 'POST',
            'permission_callback' => 'rd_cw_can_write',
            'callback'            => function (WP_REST_Request $request) use ($collection) {
                return rd_cw_upsert($collection, $request);
            },
        ]);

        register_rest_route('reinvent/v1', '/' . $collection . '/(?P<slug>[a-z0-9-]+(?:/[a-z0-9-]+)*)', [
            'methods'             => 'DELETE',
            'permission_callback' => 'rd_cw_can_write',
            'callback'            => function (WP_REST_Request $request) use ($collection) {
                return rd_cw_delete($collection, $request['slug']);
            },
        ]);
    }
}, 20);

/** Normalise the POST body into a list of entries. */
function rd_cw_rows($collection, $body) {
    if (!is_array($body)) {
        return null;
    }
    if (isset($body[$collection]) && is_array($body[$collection])) {
        return $body[$collection];
    }
    $underscored = str_replace('-', '_', $collection);   // "case-studies" also accepts "case_studies"
    if (isset($body[$underscored]) && is_array($body[$underscored])) {
        return $body[$underscored];
    }
    if (isset($body['slug'])) {
        return [$body];                 // a single entry
    }
    return array_values($body);         // a bare list
}

function rd_cw_upsert($collection, WP_REST_Request $request) {
    $rows = rd_cw_rows($collection, $request->get_json_params());
    if (!is_array($rows) || !$rows) {
        return new WP_REST_Response(['error' => 'Send one entry, a list, or { "' . $collection . '": [ ... ] }'], 400);
    }
    if (count($rows) > 200) {
        return new WP_REST_Response(['error' => 'Send at most 200 entries per request'], 400);
    }

    $stored  = rd_cw_get($collection);
    $results = [];
    foreach ($rows as $row) {
        $slug = is_array($row) && isset($row['slug']) ? strtolower(trim($row['slug'])) : '';
        if (!rd_cw_valid_slug($slug)) {
            $results[] = ['slug' => $slug, 'status' => 'error', 'message' => 'missing or invalid slug'];
            continue;
        }
        $row['slug']     = $slug;
        $existed         = isset($stored[$slug]);
        $stored[$slug]   = $row;
        $results[]       = ['slug' => $slug, 'status' => $existed ? 'updated' : 'created'];
    }
    rd_cw_set($collection, $stored);

    return new WP_REST_Response(['results' => $results], 200);
}

function rd_cw_delete($collection, $slug) {
    $stored = rd_cw_get($collection);
    if (!isset($stored[$slug])) {
        return new WP_REST_Response(['slug' => $slug, 'status' => 'not_found'], 404);
    }
    unset($stored[$slug]);
    rd_cw_set($collection, $stored);
    return new WP_REST_Response(['slug' => $slug, 'status' => 'deleted'], 200);
}

/* ------------------------------------------------------------------ *
 * 2. Overlay pushed entries onto the existing GET responses
 * ------------------------------------------------------------------ */
add_filter('rest_request_after_callbacks', function ($response, $handler, $request) {
    if ($request->get_method() !== 'GET' || is_wp_error($response)) {
        return $response;
    }
    if (!preg_match('#^/reinvent/v1/([a-z-]+)$#', $request->get_route(), $m)) {
        return $response;
    }
    $collection = $m[1];
    if (!in_array($collection, rd_cw_collections(), true)) {
        return $response;
    }
    $stored = rd_cw_get($collection);
    if (!$stored) {
        return $response;
    }

    $response = rest_ensure_response($response);
    // Work on plain arrays whatever the original callback returned.
    $data = json_decode(wp_json_encode($response->get_data()), true);
    if (!is_array($data)) {
        return $response;
    }
    $list = isset($data[$collection]) && is_array($data[$collection]) ? $data[$collection] : [];

    $only     = $request->get_param('slug');
    $page     = (int) $request->get_param('page');
    $firstPage = $page <= 1;   // new entries are added on page 1 only, so paging never repeats them

    $added = 0;
    $index = [];
    foreach ($list as $i => $entry) {
        if (is_array($entry) && isset($entry['slug'])) {
            $index[$entry['slug']] = $i;
        }
    }

    foreach ($stored as $slug => $entry) {
        if ($only && $slug !== $only) {
            continue;
        }
        if (isset($index[$slug])) {
            // Merge: pushed fields win, fields not sent are kept.
            $list[$index[$slug]] = array_merge($list[$index[$slug]], $entry);
        } elseif ($firstPage) {
            $list[] = $entry;
            $added++;
        }
    }

    $data[$collection] = array_values($list);
    if (isset($data['total']) && $added) {
        $data['total'] = (int) $data['total'] + $added;
        if (isset($data['total_pages'], $data['per_page']) && $data['per_page']) {
            $data['total_pages'] = (int) ceil($data['total'] / $data['per_page']);
        }
    }
    $response->set_data($data);
    return $response;
}, 10, 3);

/* ------------------------------------------------------------------ *
 * 3. Case studies — read AND write served by this plugin
 *
 * The existing reinvent/v1/case-studies GET returns a fatal error (HTTP 500),
 * so there is no response to overlay. This section replaces that route with
 * one that serves the pushed case studies, and adds POST/DELETE.
 *
 *   GET    /wp-json/reinvent/v1/case-studies?slug=&page=&per_page=
 *          -> { "case_studies": [ … ], "total": n, "total_pages": n }  (+ X-WP-Total headers)
 *   POST   /wp-json/reinvent/v1/case-studies        upsert by slug (auth)
 *   DELETE /wp-json/reinvent/v1/case-studies/<slug> (auth)
 *
 * Entry shape: { slug, title, excerpt, content (HTML), date, reading_time,
 *                category, client, author: {name}, image: {src, alt},
 *                results: [ {value, label} ] }
 * ------------------------------------------------------------------ */
add_action('rest_api_init', function () {
    // Priority 99 runs after the original registration; `true` replaces it.
    register_rest_route('reinvent/v1', '/case-studies', [
        [
            'methods'             => 'GET',
            'permission_callback' => '__return_true',
            'callback'            => 'rd_cw_case_studies_get',
        ],
        [
            'methods'             => 'POST',
            'permission_callback' => 'rd_cw_can_write',
            'callback'            => function (WP_REST_Request $request) {
                return rd_cw_upsert('case-studies', $request);
            },
        ],
    ], true);

    register_rest_route('reinvent/v1', '/case-studies/(?P<slug>[a-z0-9-]+)', [
        'methods'             => 'DELETE',
        'permission_callback' => 'rd_cw_can_write',
        'callback'            => function (WP_REST_Request $request) {
            return rd_cw_delete('case-studies', $request['slug']);
        },
    ], true);
}, 99);

function rd_cw_case_studies_get(WP_REST_Request $request) {
    $items = array_values(rd_cw_get('case-studies'));

    // Newest first, like the blog.
    usort($items, function ($a, $b) {
        return strcmp(isset($b['date']) ? $b['date'] : '', isset($a['date']) ? $a['date'] : '');
    });

    $slug = $request->get_param('slug');
    if ($slug) {
        $items = array_values(array_filter($items, function ($entry) use ($slug) {
            return isset($entry['slug']) && $entry['slug'] === $slug;
        }));
    }

    $per_page = max(1, min(100, (int) ($request->get_param('per_page') ?: 9)));
    $page     = max(1, (int) ($request->get_param('page') ?: 1));
    $total    = count($items);
    $pages    = max(1, (int) ceil($total / $per_page));

    $response = new WP_REST_Response([
        'case_studies' => array_slice($items, ($page - 1) * $per_page, $per_page),
        'total'        => $total,
        'total_pages'  => $pages,
    ], 200);
    $response->header('X-WP-Total', (string) $total);
    $response->header('X-WP-TotalPages', (string) $pages);
    return $response;
}
