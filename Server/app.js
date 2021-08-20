require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(
   cors({
      origin: "https://gourav-vats.github.io",
   })
);

const apiUrl = "https://pixabay.com/api/";
const apiKey = process.env.API_KEY;
var images = [];

app.get("/:searchText/:amount", (request, response) => {
   const { searchText, amount } = request.params;
   axios
      .get(
         `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
      )
      .then((res) => {
         images = res.data.hits;
         response.send(images);
      })
      .catch((err) => console.log(err));
});

let port = process.env.PORT;
if (port == null || port == "") {
   port = 3000;
}

app.listen(port, () => {
   console.log("Server has started successfully");
});
