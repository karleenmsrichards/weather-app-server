const express = require("express");
const cors = require("cors");

const app = express();
const port = 3005;

// app.use(express.json());
app.use(cors());

app.get("/current/:place", function (request, response) {
  // console.log(request.params.lat);
  // const lat = request.params.lat;
  // const long = request.params.long;
  const place = request.params.place;
  console.log(request.params.place);
  let apiResults = [];

  // fetch(
  //   // `https://api.weatherapi.com/v1/forecast.json?key=%20${process.env.apiKey}&q=${request.body.lat},${request.body.long}&days=6&aqi=no&alerts=no`
  //   // `https://api.weatherapi.com/v1/forecast.json?key=%204c0e921f27e842289ef203706230803&q=${lat},${long}&days=6&aqi=no&alerts=no`
  //   `https://api.weatherapi.com/v1/forecast.json?key=%204c0e921f27e842289ef203706230803&q=${place}&days=6&aqi=no&alerts=no`
  // )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw Error("Error");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     apiResults.push(data);
  //   })
  //   .catch((err) => err);
  console.log("hello");

  response.send("apiResults");
});

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + port);
});
