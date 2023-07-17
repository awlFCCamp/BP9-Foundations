const express = require("express");
const cors = require("cors");
const app = express();
app.use(epxress.json());

app.use(cors());
const { addSong, getSongs, updateSong, deleteSong } = require("./controller");

app.listen(4444, () => console.log(`listening on 4444`));
