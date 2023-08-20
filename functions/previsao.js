// const axios = require('axios');


// const handler = async function () {
//   try {
//     const response = await axios.get('https://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=f8d367bbf613624394fd1ae1d27ce608');
    
//     if (response.status !== 200) {
//       return { statusCode: response.status, body: response.statusText };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify(response.data),
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: error.message }),
//     };
//   }
// };

// module.exports = { handler };
