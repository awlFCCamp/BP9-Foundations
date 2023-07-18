/*function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
    console.log(format);
  }

  return format;
}*/

/*function createPhoneNumber(numbers) {
  return (
    "(" +
    numbers.splice(0, 3).join("") +
    ") " +
    numbers.splice(0, 3).join("") +
    "-" +
    numbers.splice(0, 4).join("")
  );
}*/
//splice mutate current arr slice new array
//slice (starte, not inclusive)
//splice(start, remove how many, add item, add item,..)
function createPhoneNumber(numbers) {
  return (
    "(" +
    numbers.slice(0, 3).join("") +
    ") " +
    numbers.slice(3, 6).join("") +
    "-" +
    numbers.slice(6).join("")
  );
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
