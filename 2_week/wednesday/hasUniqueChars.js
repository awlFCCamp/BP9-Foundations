// Write your code below
// approach 1
/*const hasUniqueChars = (str) => {
  let seen = new Set();
  for (char of str) {
    if (seen.has(char)) {
      return false;
    } else {
      seen.add(char);
    }
  }
  return true;
};*/

//approach 2
/*const hasUniqueChars = (str) => {
  let obj = {};
  for (char of str) {
    if (obj[char]) {
      return false;
    } else {
      obj[char] = true;
    }
  }
  return true;
};*/

//approach 3
const hasUniqueChars = (str) => {
  return str.length === new Set(str).size;
};

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Boob"));
console.log(hasUniqueChars("Bob"));
