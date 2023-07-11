//bring in express
const express = require("express");
const cors = require("cors");
//create an express application and save it to app
const app = express();

//middleware use .use() and every request that comes in goes through middleware
app.use(cors());
app.use(express.json());

//mock data acts like a database
const inventory = [
  "chair",
  "shampoo",
  "desk",
  "pen",
  "mirro",
  "hamper",
  "conditioner",
  "fan",
  "radio",
  "computer",
];

//get all inventory
app.get("/api/inventory", (req, res) => {
  if (req.query.item) {
    const filteredItems = inventory.filter((item) =>
      item.toLowerCase().includes(req.query.item)
    );
    res.status(200).send(filteredItems);
  } else {
    res.status(200).send(inventory);
  }
});

app.get("/api/inventory/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).send(inventory[+req.params.id]);
});

const SERVER_PORT = 5050;
app.listen(5050, () => console.log(`up running on ${SERVER_PORT}`));
