const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  try {
    const response = await EleventyFetch(
      `${process.env.WORDPRESS_REST_API_URL}pages/?acf_format=standard`,
      {
        // duration: '1d',
        duration: '1s',
        type: 'json',
      }
    );

    const options = response.filter((page) => page.slug === 'options');

    return options[0].acf;
  } catch (error) {
    console.error('Eleventy Fetch error: ' + error);
  }
};
