// Write your code below this line
//a-z charcode 65-90
//A-Z charcode 97-122

const decodeString = (str) => {
  const num = +str[0];
  if (isNaN(num)) return "not a valid decode string!";
  let result = "";
  for (let i = 1; i < str.length; i++) {
    let shift = str[i].charCodeAt(0) + num;
    if (shift > 122) {
      return "not a valid decode string!";
    } else {
      result += String.fromCharCode(shift);
    }
  }
  return result;
};

console.log(decodeString("1a")); // "b"
console.log(decodeString("3ce")); // "fh"
console.log(decodeString("2fcjjm")); // "hello"
