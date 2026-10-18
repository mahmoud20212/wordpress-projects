<?php
/**
 * Template Name: Full Width
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wpAcademy
 */

get_header();
get_search_form();
?>
<style type="text/css">
	.site-main {
		max-width: 100%;
		margin: 0 auto;
	}

	body,
	.site-main {
		background-color: #f2f2f2;
		font-size: 18px;
		width: 100%;
	}

	.content-area {
		width: 100%;
	}

	.site-main {
		grid-column-start: 1;
		grid-column-end: 4;
	}
</style>
<main id="primary" class="site-main">

	<?php
	while (have_posts()):
		the_post();

		get_template_part('template-parts/content', 'page');

		// If comments are open or we have at least one comment, load up the comment template.
		if (comments_open() || get_comments_number()):
			comments_template();
		endif;

	endwhile; // End of the loop.
	?>

	<div class="recent-uploaded">
		<h2><?php echo __('Recent Uploads Images', 'wpacademy'); ?></h2>
		<?php
		$attachments = get_posts(array(
			'post_type' => 'attachment',
			'post_mime_type' => 'image',
			'post_status' => null,
			'posts_per_page' => 5,
		));

		foreach ($attachments as $attachment) {
			echo wp_get_attachment_image($attachment->ID, 'thumbnail');
		}
		?>
	</div>
</main><!-- #main -->

<?php
get_footer();
