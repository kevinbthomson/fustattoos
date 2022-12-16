const esbuild = require('esbuild');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addWatchTarget('./src/js/');
  eleventyConfig.addPassthroughCopy('./src/assets');
  // eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/js/index.js'],
      bundle: true,
      outfile: 'public/js/bundle.js',
      sourcemap: true,
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    });
  });

  eleventyConfig.addShortcode(
    'currentYear',
    () => `${new Date().getFullYear()}`
  );

  // eleventyConfig.addFilter('postDate', (dateObj) => {
  //   return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  // });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'public',
    },
  };
};
