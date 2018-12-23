<?php
/**
 * Plugin Name: Menorcaboats Custom Blocks
 * Plugin URI: https://github.com/miguelllufriu/menorcaboats_custom_blocks
 * Description: Menorcaboats Custom Blocks provides custom blocks for Gutenberg editor.
 * Author: Miquel Llufriu
 * Author URI: https://github.com/miguelllufriu
 * Version: 0.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
