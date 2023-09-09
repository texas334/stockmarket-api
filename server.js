var axios = require("axios").default;
var options = {
 method: 'GET',
 url: 'https://latest-stock-price.p.rapidapi.com/price',
 params: {Indices: 'NIFTY 50'},
 headers: {
   'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
   'x-rapidapi-key': 'YOUR API KEY'
 }
};
  
  
axios.request(options).then(function (response) {
  var dataFromResponse = response.data;
  console.log(dataFromResponse);
 }).catch(function (error) {
  console.error(error);
 });