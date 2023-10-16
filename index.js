// const axios = require("axios");

// import axios from "axios";
// axios
//   .get("https://www.omdbapi.com/?i=tt3896198&apikey=10782668")
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// async function fetch() {
//   const response = await axios.get(
//     "https://www.omdbapi.com/?i=tt3896198&apikey=10782668"
//   );
//   console.log(response.data);
// }
// fetch();

const fs = require("fs");

const transformStream = require("stream");

let fileStream = fs.createReadStream(__dirname + "/input.txt");

let outputStream = process.stdout;

let middleStream = new transformStream.Transform({
  transform(chunk, enc, nextCB) {
    let modifiedChunk = chunk.toString().toUpperCase();

    this.push(modifiedChunk);

    setTimeout(nextCB, 1000);
  },
});

// fileStream.pipe(outputStream);

let newReadableStream = fileStream.pipe(middleStream);

newReadableStream.pipe(outputStream);
