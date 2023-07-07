////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = [
  "biLbO BaGGINs",
  "leGOlAs",
  "Frodo bAGGINS",
  "sAMwiSe GamGEe",
  "gAndALF tHe GREY",
];

const copyArrToCamelCase = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const splitStr = str.split(" ");
    let camelCaseStr = "";

    for (let x = 0; x < splitStr.length; x++) {
      let word = splitStr[x];

      word = word.toLowerCase();

      if (x !== 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }

      camelCaseStr += word;
    }

    newArr.push(camelCaseStr);
  }

  return newArr;
};

console.log(copyArrToCamelCase(lotr));

const copyArrToSnakeCase = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    str = str.toLowerCase();
    const splitStr = str.split(" ");
    const snakeCaseStr = splitStr.join("_");
    newArr.push(snakeCaseStr);
  }

  return newArr;
};

console.log("---------------------");
console.log(copyArrToSnakeCase(lotr));

// CODE HERE

// 4: Now let's imagine that we are thinking ahead (you'll be able to someday), and we realize that these functions can be simplified and used as "callback" functions, if we have an outer function that can take in an array and a callback.

// Logic: If we can get a callback function to modify each value in the array, then we can iterate through the array and confidently call on the callback and use its return at each iteration

// Want outer function to iterate array, make a copy, and return the copy
const copyArrAndChange = (arr, callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newValue = callback(arr[i]);
    result.push(newValue);
  }
  return result;
};
// With this outer function, we can apply any callback that will work with the data type housed in the array given as the argument. So we can make all kinds of callback functions and use them as needed in this function. --->

// Callback to copy a string to snake_case:
// Logic: Outer function should call on this function passing in a string only. Therefore we need only take the string and convert it to snake_case and return it

const copyStrToSnakeCase = (str) => {
  str = str.toLowerCase();
  const splitStr = str.split(" ");
  const snakeCaseStr = splitStr.join("_");
  return snakeCaseStr;
};

// console.log(copyStrToSnakeCase("bilbO baggins"))
// console.log(copyArrAndChange(lotr, copyStrToSnakeCase))

// 6: CHALLENGE: Make a callback function that takes in a number and returns that number multiplied by 4. Try with arrow function syntax. Can you do it in one line?
const multiplyByFour = (num) => num * 4;

let nums = [1, 2, 3, 4, 5];

console.log(copyArrAndChange(nums, multiplyByFour));
console.log(nums);

console.log(nums.map(multiplyByFour));

console.log(nums.map((num) => num * 4));

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ["red", "blue", "yellow", "green", "orange"];

const mappedColors = colors.map(() => "pink");

console.log(mappedColors);

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ["Bernard", "Elizabeth", "Conrad", "Mary Margaret"];

const formalGreeting = (names) => {
  // CODE HERE
  return names.map((name) => `Hello, ${name}`);
};

// const formalGreeting = formalNames.map((name) => "Hello," + " " + name)

console.log(formalGreeting(formalNames));

// Call formalGreeting passing in the formalNames array

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = [
  "Binghampton",
  "Albany",
  "New York",
  "Ithaca",
  "Auburn",
  "Rochester",
  "Buffalo",
];

const placesThatStartWithA = places.filter((place) => place[0] === "A");
// const placesThatStartWithA = places.filter((place) => place.startsWith('A'))

console.log(placesThatStartWithA);

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
  { receptionist: "James" },
  { programmer: "Steve" },
  { designer: "Alicia" },
];

// Do not edit the code above.
// CODE HERE

const identifier = (arr) => {
  let filteredJob = arr.filter((el) => {
    // [{ programmer: "Steve" }]
    if ("coach" in el) {
      // if ('keyword' in object) --> 'in' operater searches 'keys' of an object, rather than values.
      return el; // if ('valueName' of object) -->
    }
  });
  return filteredJob[0];
};

const identifier2 = (arr) => {
  let filteredJob = arr.filter((el) => {
    return el.programmer;
  });
  return filteredJob[0];

  // return arr.filter((el) => {
  //     return el.programmer
  // })[0]
};

// call the function passing in the jobs array
console.log("************");
console.log(identifier(jobs));

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290];

const productOfArray = (numbers) =>
  numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// CODE HERE

// call productOfArray passing in numsToReduce
console.log(productOfArray(numsToReduce));

/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000;

const expenses = [
  {
    title: "rent",
    amount: 1000,
  },
  {
    title: "car payment",
    amount: 250,
  },
  {
    title: "food",
    amount: 300,
  },
];

const remaining = expenses.reduce((acc, curr) => {
  return acc - curr.amount; // 1st iter: acc = budget = 2000, curr = { title: 'rent', amount: 1000 }, curr.amount = 1000
  // 2nd iter: acc = 1000, curr.amount = 250, acc starts at 750 on next iter
  // 3rd iter: acc = 750, curr.amount = 300, acc starts at 450 on next iter - but that's the end of the arr
}, budget);

console.log(`Remaining: ${remaining}`);
