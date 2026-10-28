<?php
/**
 * Plugin Name: Reinvent Digital — Landing Pages API
 * Description: Custom post type + REST API for the programmatic landing pages the frontend reads at /landing-pages/. Implements read, write, bulk upsert and delete per docs/landing-pages-api.md. Stores and re-serves the whole page payload, so every block (including design, problems, help, proof, splitSections, plan, hero.highlights, hero.metric) is supported without schema changes.
 * Version: 1.0.0
 * Author: Reinvent Digital
 */

if (!defined('ABSPATH')) {
    exit;
}

const RDLP_CPT  = 'landing_page';
const RDLP_META = '_rd_landing';   // the authored payload, stored as JSON
const RDLP_NS   = 'rd/v1';         // namespace for the write endpoints

/** Slugs the site's own routes already own; a landing page on one is unreachable. */
function rdlp_reserved_slugs() {
    return apply_filters('rdlp_reserved_slugs', [
        'what-we-do', 'industries', 'about', 'resources', 'locations', 'contact',
        'blog', 'blogs', 'case-study', 'case-studies', 'posts', 'wp-json', 'wp-admin',
    ]);
}

/** Origins allowed to call the REST API cross-site. Add your own with the filter. */
function rdlp_allowed_origins() {
    return apply_filters('rdlp_allowed_origins', [
        'https://reinventdigital.com',
        'https://www.reinventdigital.com',
        'https://reinvent-digital.vercel.app',
        'http://localhost:5173',
    ]);
}

/* -------------------------------------------------------------------------- */
/* 1. The custom post type                                                    */
/* -------------------------------------------------------------------------- */
add_action('init', function () {
    register_post_type(RDLP_CPT, [
        'label'        => 'Landing Pages',
        'public'       => true,
        'show_ui'      => true,
        'show_in_menu' => true,
        'show_in_rest' => true,
        'rest_base'    => 'landing-pages', // MUST be exactly this (hard-coded in the frontend)
        'supports'     => ['title'],
        'has_archive'  => false,
        'rewrite'      => false,           // WordPress must not serve these itself
        'menu_icon'    => 'dashicons-megaphone',
    ]);
});

/* -------------------------------------------------------------------------- */
/* 2. Read — shape every REST item to exactly the authored payload            */
/* -------------------------------------------------------------------------- */
add_filter('rest_prepare_' . RDLP_CPT, function ($response, $post, $request) {
    $stored = json_decode((string) get_post_meta($post->ID, RDLP_META, true), true);
    if (!is_array($stored)) {
        $stored = [];
    }
    // slug and title always track the post record.
    $stored['slug']  = $post->post_name;
    $stored['title'] = (isset($stored['title']) && $stored['title'] !== '') ? $stored['title'] : $post->post_title;
    $response->set_data($stored);
    return $response;
}, 10, 3);

/* -------------------------------------------------------------------------- */
/* 3. Write / bulk / delete  (rd/v1, authenticated)                           */
/* -------------------------------------------------------------------------- */
function rdlp_can_write() {
    // Use an application password for a user who can edit_posts.
    return current_user_can('edit_posts');
}

function rdlp_valid_slug($slug) {
    return is_string($slug) && preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $slug) === 1;
}

/**
 * Create or replace one page from a payload array.
 * @return array [status, slug, message] where status is created|updated|failed.
 */
function rdlp_upsert($page) {
    if (!is_array($page)) {
        return ['failed', null, 'row is not an object'];
    }
    $slug  = isset($page['slug']) ? sanitize_title($page['slug']) : '';
    $title = isset($page['title']) ? wp_strip_all_tags($page['title']) : '';

    if ($slug === '' || $title === '') {
        return ['failed', $slug, 'slug and title are required'];
    }
    if (!rdlp_valid_slug($slug)) {
        return ['failed', $slug, 'invalid slug: use a-z, 0-9 and hyphens only'];
    }
    if (in_array($slug, rdlp_reserved_slugs(), true)) {
        return ['failed', $slug, 'slug collides with a reserved site route'];
    }

    $existing = get_posts([
        'name'           => $slug,
        'post_type'      => RDLP_CPT,
        'post_status'    => 'any',
        'posts_per_page' => 1,
    ]);

    $postarr = [
        'post_type'   => RDLP_CPT,
        'post_title'  => $title,
        'post_name'   => $slug,
        'post_status' => 'publish',
    ];

    if ($existing) {
        $postarr['ID'] = $existing[0]->ID;
        $id     = wp_update_post($postarr, true);
        $action = 'updated';
    } else {
        $id     = wp_insert_post($postarr, true);
        $action = 'created';
    }

    if (is_wp_error($id)) {
        return ['failed', $slug, $id->get_error_message()];
    }

    $page['slug']  = $slug;
    $page['title'] = $title;
    update_post_meta($id, RDLP_META, wp_slash(wp_json_encode($page)));

    return [$action, $slug, 'ok'];
}

add_action('rest_api_init', function () {
    // POST  /rd/v1/landing-pages            — create / upsert one
    register_rest_route(RDLP_NS, '/landing-pages', [
        'methods'             => 'POST',
        'permission_callback' => 'rdlp_can_write',
        'callback'            => function (WP_REST_Request $req) {
            list($status, $slug, $msg) = rdlp_upsert($req->get_json_params());
            $code = $status === 'failed' ? 422 : ($status === 'created' ? 201 : 200);
            return new WP_REST_Response(['status' => $status, 'slug' => $slug, 'message' => $msg], $code);
        },
    ]);

    // PUT    /rd/v1/landing-pages/<slug>     — replace one
    register_rest_route(RDLP_NS, '/landing-pages/(?P<slug>[a-z0-9-]+)', [
        'methods'             => 'PUT',
        'permission_callback' => 'rdlp_can_write',
        'callback'            => function (WP_REST_Request $req) {
            $page = $req->get_json_params();
            if (is_array($page)) {
                $page['slug'] = $req['slug'];
            }
            list($status, $slug, $msg) = rdlp_upsert($page);
            $code = $status === 'failed' ? 422 : 200;
            return new WP_REST_Response(['status' => $status, 'slug' => $slug, 'message' => $msg], $code);
        },
    ]);

    // DELETE /rd/v1/landing-pages/<slug>     — remove one
    register_rest_route(RDLP_NS, '/landing-pages/(?P<slug>[a-z0-9-]+)', [
        'methods'             => 'DELETE',
        'permission_callback' => 'rdlp_can_write',
        'callback'            => function (WP_REST_Request $req) {
            $existing = get_posts([
                'name'           => $req['slug'],
                'post_type'      => RDLP_CPT,
                'post_status'    => 'any',
                'posts_per_page' => 1,
            ]);
            if (!$existing) {
                return new WP_REST_Response(['status' => 'not_found', 'slug' => $req['slug']], 404);
            }
            wp_trash_post($existing[0]->ID);
            return new WP_REST_Response(['status' => 'deleted', 'slug' => $req['slug']], 200);
        },
    ]);

    // POST   /rd/v1/landing-pages/bulk       — create / replace an array, per-row report
    register_rest_route(RDLP_NS, '/landing-pages/bulk', [
        'methods'             => 'POST',
        'permission_callback' => 'rdlp_can_write',
        'callback'            => function (WP_REST_Request $req) {
            $body = $req->get_json_params();
            $rows = (is_array($body) && isset($body['landing_pages'])) ? $body['landing_pages'] : $body;
            if (!is_array($rows)) {
                return new WP_REST_Response(['message' => 'expected an array or {landing_pages:[...]}'], 400);
            }
            if (count($rows) > 100) {
                return new WP_REST_Response(['message' => 'batch too large; send at most 100 rows'], 413);
            }
            $results = [];
            $summary = ['created' => 0, 'updated' => 0, 'failed' => 0];
            foreach ($rows as $page) {
                list($status, $slug, $msg) = rdlp_upsert($page);
                $results[] = ['slug' => $slug, 'status' => $status, 'message' => $msg];
                if (isset($summary[$status])) {
                    $summary[$status]++;
                }
            }
            return new WP_REST_Response(['summary' => $summary, 'results' => $results], 200);
        },
    ]);
});

/* -------------------------------------------------------------------------- */
/* 4. CORS — for the allow-listed origins, on every REST response             */
/*    (covers /posts/ and /case-studies/ too, which the frontend also calls)  */
/* -------------------------------------------------------------------------- */
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($served, $result, $request) {
        $origin  = get_http_origin();
        $allowed = rdlp_allowed_origins();
        if ($origin && in_array($origin, $allowed, true)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Vary: Origin');
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Authorization, Content-Type');
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Expose-Headers: X-WP-Total, X-WP-TotalPages');
        }
        if ('OPTIONS' === $request->get_method()) {
            status_header(204);
            exit;
        }
        return $served;
    }, 10, 3);
}, 15);

/* -------------------------------------------------------------------------- */
/* 5. Flush rewrite rules on activation / deactivation                        */
/* -------------------------------------------------------------------------- */
register_activation_hook(__FILE__, function () {
    // Ensure the CPT is registered before flushing.
    do_action('init');
    flush_rewrite_rules();
});
register_deactivation_hook(__FILE__, 'flush_rewrite_rules');
