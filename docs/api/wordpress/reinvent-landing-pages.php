<?php
/**
 * Plugin Name: Reinvent Digital — Landing Pages API
 * Description: Registers the `landing-pages` REST endpoint the Reinvent Digital
 *              frontend reads, in the exact JSON shape it expects, plus an
 *              authenticated bulk upsert endpoint for publishing pages in bulk.
 * Version:     1.0.0
 * Author:      Reinvent Digital
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS GIVES THE FRONTEND
 *
 *   GET  {base}/landing-pages/?slug=<slug>          one page (per page view)
 *   GET  {base}/landing-pages/?page=1&per_page=100  list (for sitemap)
 *
 * where {base} is whatever VITE_BLOG_API_URL points at — the SAME base the
 * site already uses for /posts/ and /case-studies/ (i.e. the WordPress REST v2
 * base, e.g. https://reinventmedia.in/staging-reinventdigital/wp-json/wp/v2).
 *
 *   POST   {site}/wp-json/reinvent/v1/landing-pages/bulk     create/replace many
 *   DELETE {site}/wp-json/reinvent/v1/landing-pages/<slug>   remove one
 *
 * Each page is stored as one JSON blob in post meta (`_rd_landing`). The read
 * endpoint flattens { slug, title, ...blob } so it matches the documented shape.
 * Install: drop this file in wp-content/plugins/, activate, then visit
 * Settings → Permalinks once (to flush rewrite rules).
 * ---------------------------------------------------------------------------
 */

if (!defined('ABSPATH')) {
    exit;
}

const RD_LP_CPT        = 'landing_page';
const RD_LP_REST_BASE  = 'landing-pages';   // MUST stay exactly this — hard-coded in the frontend.
const RD_LP_META       = '_rd_landing';     // the JSON blob of all blocks.
const RD_LP_RESERVED   = ['what-we-do', 'industries', 'about', 'resources', 'locations', 'contact'];

// Origins allowed to read the API from the browser.
const RD_LP_ORIGINS = ['https://reinventdigital.com', 'http://localhost:5173'];

/* ------------------------------------------------------------------ *
 * 1. The custom post type -> gives /wp/v2/landing-pages/
 * ------------------------------------------------------------------ */
add_action('init', function () {
    register_post_type(RD_LP_CPT, [
        'labels'       => ['name' => 'Landing Pages', 'singular_name' => 'Landing Page'],
        'public'       => false,   // WordPress must NOT serve these itself…
        'show_ui'      => true,    // …but they are editable in wp-admin.
        'show_in_rest' => true,
        'rest_base'    => RD_LP_REST_BASE,
        'supports'     => ['title'],
        'has_archive'  => false,
        'rewrite'      => false,
        'menu_icon'    => 'dashicons-admin-page',
    ]);
});

register_activation_hook(__FILE__, function () {
    // Register then flush so the new route is served immediately.
    do_action('init');
    flush_rewrite_rules();
});
register_deactivation_hook(__FILE__, 'flush_rewrite_rules');

/* ------------------------------------------------------------------ *
 * 2. Shape the REST response to the frontend contract
 *    { slug, title, seo, hero, design, problems, help, proof,
 *      reasons, services, splitSections, plan, intro, overview,
 *      blogs, faqs, closing }
 * ------------------------------------------------------------------ */
add_filter('rest_prepare_' . RD_LP_CPT, function ($response, $post) {
    $blocks = json_decode(get_post_meta($post->ID, RD_LP_META, true), true);
    if (!is_array($blocks)) {
        $blocks = [];
    }
    // slug + title are authoritative from the post; everything else from the blob.
    unset($blocks['slug'], $blocks['title']);
    $data = array_merge(
        ['slug' => $post->post_name, 'title' => get_the_title($post)],
        $blocks
    );
    $response->set_data($data);
    return $response;
}, 10, 2);

/* ------------------------------------------------------------------ *
 * 3. CORS — on every response, including errors
 * ------------------------------------------------------------------ */
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $origin = get_http_origin();
        if ($origin && in_array($origin, RD_LP_ORIGINS, true)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Vary: Origin');
        }
        header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Authorization, Content-Type');
        header('Access-Control-Expose-Headers: X-WP-Total, X-WP-TotalPages');
        return $value;
    });
}, 15);

/* ------------------------------------------------------------------ *
 * 4. Write endpoints — bulk upsert + delete (authenticated)
 * ------------------------------------------------------------------ */
add_action('rest_api_init', function () {
    $can_write = function () {
        return current_user_can('edit_posts');   // use an Application Password.
    };

    register_rest_route('reinvent/v1', '/landing-pages/bulk', [
        'methods'             => 'POST',
        'permission_callback' => $can_write,
        'callback'            => 'rd_lp_bulk_upsert',
    ]);

    register_rest_route('reinvent/v1', '/landing-pages/(?P<slug>[a-z0-9-]+)', [
        'methods'             => 'DELETE',
        'permission_callback' => $can_write,
        'callback'            => 'rd_lp_delete',
    ]);
});

/** Find a landing_page post id by slug, or 0. */
function rd_lp_find($slug) {
    $existing = get_posts([
        'post_type'   => RD_LP_CPT,
        'name'        => $slug,
        'post_status' => 'any',
        'numberposts' => 1,
        'fields'      => 'ids',
    ]);
    return $existing ? (int) $existing[0] : 0;
}

/** Validate a slug; returns an error string or '' when ok. */
function rd_lp_bad_slug($slug) {
    if (!is_string($slug) || !preg_match('/^[a-z0-9-]+$/', $slug)) {
        return 'slug must be lowercase letters, numbers and hyphens';
    }
    if (in_array($slug, RD_LP_RESERVED, true)) {
        return 'slug collides with a real site route';
    }
    return '';
}

/**
 * POST /reinvent/v1/landing-pages/bulk
 * Body: a bare array of pages, or { "landing_pages": [ ... ] }.
 * Upserts on slug; reports per row.
 */
function rd_lp_bulk_upsert(WP_REST_Request $request) {
    $body = $request->get_json_params();
    $rows = isset($body['landing_pages']) ? $body['landing_pages'] : $body;
    if (!is_array($rows)) {
        return new WP_REST_Response(['error' => 'expected an array of pages'], 400);
    }
    if (count($rows) > 100) {
        return new WP_REST_Response(['error' => 'send at most 100 pages per request'], 400);
    }

    $results = [];
    foreach ($rows as $row) {
        $slug  = isset($row['slug']) ? sanitize_title($row['slug']) : '';
        $title = isset($row['title']) ? wp_strip_all_tags($row['title']) : '';

        $bad = rd_lp_bad_slug($slug);
        if ($bad !== '' || $title === '') {
            $results[] = ['slug' => $slug, 'status' => 'error', 'message' => $bad ?: 'title is required'];
            continue;
        }

        // Everything except slug/title is the stored blob.
        $blocks = $row;
        unset($blocks['slug'], $blocks['title']);

        $existing = rd_lp_find($slug);
        $postarr  = [
            'post_type'   => RD_LP_CPT,
            'post_name'   => $slug,
            'post_title'  => $title,
            'post_status' => 'publish',
        ];
        if ($existing) {
            $postarr['ID'] = $existing;
        }

        $id = wp_insert_post($postarr, true);
        if (is_wp_error($id)) {
            $results[] = ['slug' => $slug, 'status' => 'error', 'message' => $id->get_error_message()];
            continue;
        }

        update_post_meta($id, RD_LP_META, wp_json_encode($blocks));
        $results[] = ['slug' => $slug, 'status' => $existing ? 'updated' : 'created'];
    }

    return new WP_REST_Response(['results' => $results], 200);
}

/** DELETE /reinvent/v1/landing-pages/<slug> */
function rd_lp_delete(WP_REST_Request $request) {
    $slug = sanitize_title($request['slug']);
    $id   = rd_lp_find($slug);
    if (!$id) {
        return new WP_REST_Response(['slug' => $slug, 'status' => 'not_found'], 404);
    }
    wp_delete_post($id, true);
    return new WP_REST_Response(['slug' => $slug, 'status' => 'deleted'], 200);
}

/* ------------------------------------------------------------------ *
 * 5. A simple admin editor — paste/adjust the JSON blocks by hand
 * ------------------------------------------------------------------ */
add_action('add_meta_boxes', function () {
    add_meta_box('rd_lp_json', 'Landing Page Blocks (JSON)', function ($post) {
        wp_nonce_field('rd_lp_save', 'rd_lp_nonce');
        $json = get_post_meta($post->ID, RD_LP_META, true);
        if ($json) {
            $json = wp_json_encode(json_decode($json, true), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        }
        echo '<p>Everything except the title. See docs/landing-pages-api.md for the fields.</p>';
        echo '<textarea name="rd_lp_json" style="width:100%;height:460px;font-family:monospace;">'
            . esc_textarea($json) . '</textarea>';
    }, RD_LP_CPT, 'normal', 'high');
});

add_action('save_post_' . RD_LP_CPT, function ($post_id) {
    if (!isset($_POST['rd_lp_nonce']) || !wp_verify_nonce($_POST['rd_lp_nonce'], 'rd_lp_save')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    $raw = isset($_POST['rd_lp_json']) ? wp_unslash($_POST['rd_lp_json']) : '';
    $decoded = json_decode($raw, true);
    // Only save when it parses; silently keep the previous value otherwise.
    if (is_array($decoded)) {
        unset($decoded['slug'], $decoded['title']);
        update_post_meta($post_id, RD_LP_META, wp_json_encode($decoded));
    }
});
