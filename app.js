// Requirements
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const request = require("request");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const server = express();
const port = process.env.PORT || 4000;

// Middlewares
server.use(cors());
server.use(morgan("crypto"));

//Routes
server.get("/coins", async (req, res) => {
  const url = "https://api.coinranking.com/v2/coins";
  try {
    const response = await fetch(url, {
      headers: { "x-access-token": process.env.COIN_RANKING_API_KEY },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
