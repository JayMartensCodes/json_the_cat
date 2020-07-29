const request = require('request');

const catBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, function(error, response, body) {
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`No data on ${catBreed}`);
  } else {
    console.log(data[0].description);
  }
});