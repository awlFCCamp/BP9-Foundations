const message = document.querySelector("#message");
const addMovie = (e) => {
  e.preventDefault();
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
};

document.querySelector("form").addEventListener("submit", addMovie);

deleteMovie = (e) => {
  //message.textContent = "Movie deleted!";
  message.textContent = `${e.target.parentNode.firstChild.textContent} deleted!`;
  revealMessage();
  e.target.parentNode.remove();
};

const crossOffMovie = (e) => {
  e.target.classList.toggle("checked");
  if (e.target.classList.contains("checked")) {
    // message.textContent = "Movie watched";
    message.textContent = `${e.target.textContent} watched!`;
  } else {
    //message.textContent = "Movie added back!";
    message.textContent = `${e.target.textContent} added back!`;
  }
  revealMessage();
};

const revealMessage = () => {
  setTimeout(() => message.classList.add("hide"), 1000);
  message.classList.remove("hide");
};
