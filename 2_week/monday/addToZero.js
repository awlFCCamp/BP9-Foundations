/*Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
*/
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:

//approach 1
function addToZero(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log(true);
      }
    }
    console.log(false);
  }
}

//approach 2
function addToZeroFast(arr) {
  const numsSet = new Set();
  for (let num of arr) {
    if (numsSet.has(-num)) {
      return true;
    }
    numsSet.add(num);
  }
  return false;
}
