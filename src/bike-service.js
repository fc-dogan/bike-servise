// export class BikeService {
//   async searchBikeByCity(city) {
//     try {
//       let response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${city}&distance=10&stolenness=stolen`);
//       let jsonifiedResponse = await response.json();
//       console.log(jsonifiedResponse);
//       return jsonifiedResponse;
//     } catch(error) {
//       console.error("There was an error handling your request: " + error.message)
//     }
//   }
// }