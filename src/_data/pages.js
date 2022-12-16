const EleventyFetch = require('@11ty/eleventy-fetch');
const wordpressAPI = 'https://fustattoos.com/wp-json/wp/v2/pages';

module.exports = async function () {
  try {
    const response = await EleventyFetch(wordpressAPI, {
      duration: '1d',
      type: 'json',
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
