const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const breedFetcher = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log("Oops, something went wrong");
    } else if (body === "[]") {
      console.log("No match found, sorry");
    } else {
      console.log(JSON.parse(body)[0]['description']);
    }
  });
};
breedFetcher(args[0]);
