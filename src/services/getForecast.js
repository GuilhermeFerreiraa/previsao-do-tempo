// class HttpClient {
//   constructor() {
//     this.baseURL =
//       "http://apiadvisor.climatempo.com.br/api-manager/user-token/6973233af68cbc378954b6800ec7f2c5/locales";
//   }

//   get(options) {
//     return this.makeRequest(this.baseURL, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   async makeRequest(path, options) {
//     const params = ["6754"];

//     const response = await fetch(`${this.baseURL}${path}`, {
//       method: "PUT",
//       body: JSON.stringify(params),
//       headers: {
//         method: "PUT",
//         body: options?.body,
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       },
//     }).then((res) => {});

//     let responseBody = null;

//     const contentType = response.headers.get("Content-Type");
//     if (contentType?.includes("application/json")) {
//       responseBody = await response.json();
//     }

//     if (response.ok) {
//       return responseBody;
//     }

//     throw new Error(response, responseBody);
//   }
// }

// export default new HttpClient();
