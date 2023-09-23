// module.exports = function () {
//   return {
//     name: "Fu's Custom Tattoos",
//     contact: {
//       phone: '(704) 376-4556',
//       email: 'fuscustomtattoos@gmail.com',
//       instagram: 'https://instagram.com/fuscustomtattoo',
//       address: '3200 N Davidson St. Charlotte, North Carolina',
//       hours: [
//         {
//           days: 'Monday - Thursday',
//           times: '12pm - 8pm',
//         },
//         {
//           days: 'Friday - Saturday',
//           times: '12pm - 8pm',
//         },
//         {
//           days: 'Sunday',
//           times: '12pm - 6pm',
//         },
//       ],
//     },
//   };
// };

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
