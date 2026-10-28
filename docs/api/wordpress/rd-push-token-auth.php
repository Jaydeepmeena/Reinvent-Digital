<?php
/**
 * Plugin Name: Reinvent Digital — Push Token Auth
 * Description: Lets the content push script log in to the REST API with a secret
 *              X-RD-Token header, for hosts that strip the Authorization header
 *              (so Application Passwords never reach WordPress). Set the token
 *              under Settings → Push Token. Existing route permissions apply as
 *              normal — a valid token just logs the request in.
 * Version:     1.1.0
 * Author:      Reinvent Digital
 *
 * Works as a normal plugin or a must-use plugin. The token can come from:
 *   - Settings → Push Token (only a SHA-256 hash is stored), or
 *   - wp-config.php: define('RD_PUSH_TOKEN', '<32+ chars>'); define('RD_PUSH_USER', 'admin');
 *
 * SECURITY: off until a token of 32+ characters is set; REST requests only; only
 * when nobody is already logged in; constant-time comparison. Whoever holds the
 * token acts as the chosen user — keep it secret and change it if exposed.
 */

if (!defined('ABSPATH')) {
    exit;
}

const RD_PT_HASH_OPTION = 'rd_push_token_sha256';
const RD_PT_USER_OPTION = 'rd_push_token_user_id';

/** True when a token is configured (constant or settings page). */
function rd_pt_configured() {
    if (defined('RD_PUSH_TOKEN') && is_string(RD_PUSH_TOKEN) && strlen(RD_PUSH_TOKEN) >= 32) {
        return true;
    }
    return (bool) get_option(RD_PT_HASH_OPTION);
}

/** Does the sent token match? */
function rd_pt_matches($sent) {
    if (!is_string($sent) || $sent === '') {
        return false;
    }
    if (defined('RD_PUSH_TOKEN') && is_string(RD_PUSH_TOKEN) && strlen(RD_PUSH_TOKEN) >= 32) {
        return hash_equals(RD_PUSH_TOKEN, $sent);
    }
    $stored = get_option(RD_PT_HASH_OPTION);
    return is_string($stored) && $stored !== '' && hash_equals($stored, hash('sha256', $sent));
}

/** The user a valid token logs in as. */
function rd_pt_user_id() {
    if (defined('RD_PUSH_USER')) {
        $user = get_user_by('login', RD_PUSH_USER);
        return $user ? (int) $user->ID : 0;
    }
    return (int) get_option(RD_PT_USER_OPTION, 0);
}

function rd_pt_is_rest_request() {
    $uri    = isset($_SERVER['REQUEST_URI']) ? (string) $_SERVER['REQUEST_URI'] : '';
    $prefix = '/' . trim(function_exists('rest_get_url_prefix') ? rest_get_url_prefix() : 'wp-json', '/') . '/';
    return strpos($uri, $prefix) !== false || isset($_GET['rest_route']);
}

/* ------------------------------------------------------------------ *
 * Authenticate REST requests that carry a valid X-RD-Token
 * ------------------------------------------------------------------ */
add_filter('determine_current_user', function ($user_id) {
    if ($user_id || !rd_pt_is_rest_request() || !rd_pt_configured()) {
        return $user_id;
    }
    $sent = isset($_SERVER['HTTP_X_RD_TOKEN']) ? (string) $_SERVER['HTTP_X_RD_TOKEN'] : '';
    if (!rd_pt_matches($sent)) {
        return $user_id;
    }
    $id = rd_pt_user_id();
    return $id ?: $user_id;
}, 30);

/* ------------------------------------------------------------------ *
 * Settings → Push Token
 * ------------------------------------------------------------------ */
add_action('admin_menu', function () {
    add_options_page('Push Token', 'Push Token', 'manage_options', 'rd-push-token', 'rd_pt_settings_page');
});

function rd_pt_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }
    $notice = '';
    if (isset($_POST['rd_pt_action']) && check_admin_referer('rd_pt_save')) {
        if ($_POST['rd_pt_action'] === 'save') {
            $token = isset($_POST['rd_pt_token']) ? trim(wp_unslash($_POST['rd_pt_token'])) : '';
            if (strlen($token) < 32) {
                $notice = '<div class="notice notice-error"><p>The token must be at least 32 characters.</p></div>';
            } else {
                update_option(RD_PT_HASH_OPTION, hash('sha256', $token), false);
                update_option(RD_PT_USER_OPTION, get_current_user_id(), false);
                $notice = '<div class="notice notice-success"><p>Token saved. Pushes will run as you.</p></div>';
            }
        } elseif ($_POST['rd_pt_action'] === 'clear') {
            delete_option(RD_PT_HASH_OPTION);
            delete_option(RD_PT_USER_OPTION);
            $notice = '<div class="notice notice-success"><p>Token removed. Token logins are off.</p></div>';
        }
    }
    $configured = rd_pt_configured();
    $user       = get_userdata(rd_pt_user_id());
    echo '<div class="wrap"><h1>Push Token</h1>' . $notice;
    echo '<p>Status: <strong>' . ($configured ? 'Configured' : 'Not configured') . '</strong>';
    if ($configured && $user) {
        echo ' — pushes run as <strong>' . esc_html($user->user_login) . '</strong>';
    }
    echo '</p><p>Paste the secret you generated (32+ characters). Only a SHA-256 hash is stored; the token itself is never saved or shown.</p>';
    echo '<form method="post">';
    wp_nonce_field('rd_pt_save');
    echo '<input type="password" name="rd_pt_token" class="regular-text" autocomplete="off" placeholder="Paste token">';
    echo ' <button class="button button-primary" name="rd_pt_action" value="save">Save token</button>';
    if ($configured) {
        echo ' <button class="button" name="rd_pt_action" value="clear">Remove token</button>';
    }
    echo '</form></div>';
}

/* ------------------------------------------------------------------ *
 * Diagnostics — GET /wp-json/rd/v1/auth-diag
 * True/false flags only, no secrets. Remove once pushes work.
 * ------------------------------------------------------------------ */
add_action('rest_api_init', function () {
    register_rest_route('rd/v1', '/auth-diag', [
        'methods'             => 'GET',
        'permission_callback' => '__return_true',
        'callback'            => function () {
            $sent = isset($_SERVER['HTTP_X_RD_TOKEN']) ? (string) $_SERVER['HTTP_X_RD_TOKEN'] : '';
            return [
                'push_token_plugin_loaded'     => true,
                'php_handler'                  => PHP_SAPI,
                'authorization_header_reached' => isset($_SERVER['HTTP_AUTHORIZATION']) || isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION']) || isset($_SERVER['PHP_AUTH_USER']),
                'token_configured'             => rd_pt_configured(),
                'token_header_reached'         => $sent !== '',
                'token_valid'                  => rd_pt_configured() && rd_pt_matches($sent),
                'logged_in_as'                 => get_current_user_id() ? wp_get_current_user()->user_login : null,
            ];
        },
    ]);
});
