const request = require('request');
const fs = require('fs');
const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body !== "[]") {
      callback(null, JSON.parse(body)[0]['description']);
    } else callback(null, body)
  })
};
module.exports = { fetchBreedDescription };
