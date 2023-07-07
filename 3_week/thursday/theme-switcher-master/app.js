let count = 0;
let counter = document.querySelector("h1");
let plusBtn = document.querySelector("#plusBtn");
let minusBtn = document.querySelector("#minusBtn");
let resetBtn = document.querySelector("#resetBtn");

const increment = () => {
  count++;
  counter.textContent = count;
};

plusBtn.addEventListener("click", increment);

const decrement = () => {
  count--;
  counter.textContent = count;
};
minusBtn.addEventListener("click", decrement);

const reset = () => {
  count = 0;
  counter.textContent = count;
};

/*resetBtn.addEventListener("click", reset);
let facebookBtn = document.querySelector("#facebook-btn");
const changeFb = () => {
  const btns = document.querySelectorAll(".themeBtn");
  const main = document.querySelector("main");
  const body = document.querySelector("body");
  main.className = "facebook";
  body.className = "facebook";
  btns[0].className = "facebook";
};

facebookBtn.addEventListener("click", changeFb);*/

function selectTheme(theme) {
  document.querySelector("#main").className = theme;
  document.querySelector("body").className = theme;
  /*let btns = document.querySelectorAll("button");
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = theme;
  }*/
}
