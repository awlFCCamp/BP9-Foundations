// Write your solution below:
function makeUnique(str) {
  return [...new Set(Array.from(str))].join("");
}

console.log(makeUnique("helloworld"));
// helowrd

console.log(makeUnique("iwanttoclimbamountain"));
// iwantoclmbu
