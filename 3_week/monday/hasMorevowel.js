const hasMoreVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = Array.from(str.toLowerCase()).filter((char) =>
    vowels.includes(char)
  ).length;
  const nonVowelCount = str.length - vowelCount;

  return vowelCount > nonVowelCount;
};
/*const hasMoreVowels = (str) => {
  if (str.match(/[aeiou]/gi)) {
    return str.match(/[aeiou]/gi).length > str.length / 2;
  } else {
    return false;
  }
};*/

console.log(hasMoreVowels("moose")); //true
console.log(hasMoreVowels("mice")); //false
console.log(hasMoreVowels("graph")); //false
console.log(hasMoreVowels("yay")); //false
console.log(hasMoreVowels("Aal")); //true
console.log(hasMoreVowels("bcd"));
