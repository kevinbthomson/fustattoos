<?php
	
	// Add RSS links to <head> section
	automatic_feed_links();

	// Hide Admin Bar when logged in
	add_filter('show_admin_bar', '__return_false');

	// Allow plugin shortcode in sidebar widgets
	add_filter('widget_text', 'do_shortcode');

	add_theme_support( 'post-thumbnails' );
	
	// Clean up the <head>
	function removeHeadLinks() {
		remove_action('wp_head', 'rsd_link');
		remove_action('wp_head', 'wlwmanifest_link');
	}



	//////////////////////
	// Javascript
	function fustattoos_theme_js() {
    wp_deregister_script('jquery');
    
		wp_enqueue_script( 'jquery_js', 'https://code.jquery.com/jquery-3.4.0.min.js', '', '', true);

    wp_enqueue_script( 'tether_js', 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', '', '', true);

    wp_enqueue_script( 'instafetch', 'https://cdnjs.cloudflare.com/ajax/libs/instafetch.js/1.5.0/instafetch.min.js', '', '', true);

    wp_enqueue_script( 'lightbox', get_template_directory_uri() . '/js/lightbox.min.js', '', '', true );

    wp_enqueue_script( 'main_js', get_template_directory_uri() . '/js/functions.js', '', '', true);
	}

	add_action( 'wp_enqueue_scripts', 'fustattoos_theme_js' );
	///////////////////////////////

	
	add_action('init', 'removeHeadLinks');
	remove_action('wp_head', 'wp_generator');
	
	// Declare sidebar widget zone
	if (function_exists('register_sidebar')) {
		register_sidebar(array(
			'name' => 'Sidebar Widgets',
			'id'   => 'sidebar-widgets',
			'description'   => 'These are widgets for the sidebar.',
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2>',
			'after_title'   => '</h2>'
		));
	}

	if (function_exists('register_sidebar')) {
		register_sidebar(array(
			'name' => 'Footer Widgets',
			'id'   => 'footer-widgets',
			'description'   => 'These are widgets for the footer.',
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2>',
			'after_title'   => '</h2>'
		));
	}

	// Register custom Navigation
	register_nav_menus( array(
		'main_menu' => 'Main Navigation Menu',
	) );


	/**
	 * Filters wp_title to print a neat <title> tag based on what is being viewed.
	 *
	 * @param string $title Default title text for current view.
	 * @param string $sep Optional separator.
	 * @return string The filtered title.
	 */
	function theme_name_wp_title( $title, $sep ) {
		if ( is_feed() ) {
			return $title;
		}
		
		global $page, $paged;

		// Add the blog name
		$title .= get_bloginfo( 'name', 'display' );

		// Add the blog description for the home/front page.
		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) ) {
			$title .= " $sep $site_description";
		}

		// Add a page number if necessary:
		if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
			$title .= " $sep " . sprintf( __( 'Page %s', '_s' ), max( $paged, $page ) );
		}

		return $title;
	}
	add_filter( 'wp_title', 'theme_name_wp_title', 10, 2 );

?>