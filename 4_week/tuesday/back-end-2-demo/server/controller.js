const movieDatabase = require("./db.json");
let currentId = 11;
module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movieDatabase);
  },
  addMovie: (req, res) => {
    const { title, rating, imageURL } = req.body;
    movieDatabase.push({
      id: currentId,
      title: title,
      rating: rating,
      imageURL: imageURL,
    });
    currentId += 1;
    res.status(200).send(movieDatabase);
  },
  deleteMovie: (req, res) => {
    let index = movieDatabase.findIndex((elem) => elem.id === +req.params.id);
    movieDatabase.splice(index, 1);
    res.status(200).send(movieDatabase);
  },
};
