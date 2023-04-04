//Weather API

const axios = require("axios");
const prompt = require('prompt-sync')();

let city=prompt('Enter The City:')  
const params = {
  access_key: "2f79f9e76b32727dad73ac65991d9961",
  query: city,
};

axios
  .get("http://api.weatherstack.com/current", { params })
  .then((response) => {
    const apiResponse = response.data;
    console.log(`Tempature of ${city} is: ${apiResponse.current.temperature}` );
    console.log(`Tempature of ${city} is : ${apiResponse.current.weather_descriptions}` );
      
  })
  .catch((error) => {
    console.log(error);
  });