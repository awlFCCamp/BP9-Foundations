console.log("hello world");

/*const message = document.querySelector("#message");

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
  const list = document.querySelector("ul");
  list.appendChild(movie);
  inputField.value = "";
};

document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (e) => {
  e.target.parentNode.remove();
  message.textContent = "Movie deleted";
  revealMessage();
};

const crossOffMovie = (e) => {
  e.target.classList.toggle("checked");
  if (e.target.classList.contains("checked")) {
    message.textContent = `${e.target.textContent} watched!`;
  } else {
    message.textContent = `${e.target.textContent} added back!`;
  }
  revealMessage();
};

const revealMessage = (cb, time) => {
  message.classList.remove("hide");
  setTimeout(() => {
    message.classList.add("hide");
  }, 1000);
};*/
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

const deleteMovie = (e) => {
  e.target.parentNode.remove();
  message.textContent = "Movie deleted";
};

const crossOffMovie = (e) => {
  e.target.classList.toggle("checked");
  if (e.target.classList.contains("checked")) {
    message.textContent = "Movie watched!";
  } else {
    message.textContent = "Movie added back";
  }
};
document.querySelector("form").addEventListener("submit", addMovie);
