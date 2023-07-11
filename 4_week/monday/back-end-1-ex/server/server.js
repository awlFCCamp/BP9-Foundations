const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const SERVER_PORT = 4000;
app.listen(4000, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];

app.get("/api/users", (req, res) => {
  res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
  const { temperature } = req.params;
  const words = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(words);
});
