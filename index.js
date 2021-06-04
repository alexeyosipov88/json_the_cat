const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);
fetchBreedDescription(args[0], (error, desc) => {
  if (error) {
    console.log("Error fetch detatils:", error);
  } else if (desc === "[]") {
    console.log('Please try another breed name');
  } else {
    console.log(desc);
  }
});
