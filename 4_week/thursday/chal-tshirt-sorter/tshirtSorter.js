// Write your solution below:
/*const tshirtSorter = (str) => {
  const s = [];
  const m = [];
  const l = [];
  for (const char of str) {
    if (char === "s") {
      s.push(char);
    } else if (char === "m") {
      m.push(char);
    } else if (char === "l") {
      l.push(char);
    }
  }
  return s.join("") + m.join("") + l.join("");
};*/
const tshirtSorter = (str) => {
  const sizeOrder = { s: 0, m: 1, l: 2 };
  return str
    .split("")
    .sort((a, b) => sizeOrder[a] - sizeOrder[b])
    .join("");
};

console.log(tshirtSorter("lms"));
// sml
console.log(tshirtSorter("smllms"));
// ssmmll
