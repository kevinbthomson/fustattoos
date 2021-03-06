<?php get_header(); ?>

	<?php if (have_posts()) : ?>

		<h1>Search Results</h1>

		<?php post_navigation(); ?>

		<?php while (have_posts()) : the_post(); ?>

			<article <?php post_class() ?> id="post-<?php the_ID(); ?>">

				<h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>

				<?php posted_on(); ?>

				<div class="entry">

					<?php the_excerpt(); ?>

				</div>

			</article>

		<?php endwhile; ?>

		<?php post_navigation(); ?>

	<?php else : ?>

		<h2>Nothing Found</h2>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
