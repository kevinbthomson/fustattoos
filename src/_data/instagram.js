const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  try {
    const response = await EleventyFetch(`${process.env.BEHOLD_API_URL}`, {
      // duration: '1d',
      duration: '1s',
      type: 'json',
    });

    return response;
  } catch (error) {
    console.error('oh SHIT! Behold: https://app.behold.so/ ' + error);
  }
};
