////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiple = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

// check if num1 or num2 is number
//use + short hand for Number to convert those could be convert to numbers to numbers
const calculator = (num1, num2, cb) => {
  if (+num1 && +num2) {
    num1 = +num1;
    num2 = +num2;
    return cb(num1, num2);
  } else {
    console.log(`please enter numbers`);
  }
};

const addResult = calculator(3, 4, add);
console.log(addResult);
const minusResult = calculator(5, 6, substract);
console.log(minusResult);
const multipleResult = calculator(7, 8, multiple);
console.log(multipleResult);
const divisionResult = calculator(21, 3, division);
console.log(divisionResult);
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
  {
    name: "leash",
    colors: ["red", "blue", "green"],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: "chew toy",
    colors: ["brown"],
    category: 2,
    inventory: 120,
    basePrice: 6.0,
    displayPrice: 6.0,
  },
  {
    name: "rope",
    colors: ["blue & green", "red & yellow"],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99,
  },
];

const catProducts = [
  {
    name: "mouse toy",
    colors: ["pink", "grey", "black"],
    category: 2,
    inventory: 125,
    basePrice: 2.5,
    displayPrice: 2.5,
  },
  {
    name: "cat sweater",
    colors: ["black"],
    category: 1,
    inventory: 15,
    basePrice: 10.0,
    displayPrice: 10.0,
  },
  {
    name: "straching post",
    colors: ["tan"],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99,
  },
];

// CODE HERE
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount);
};

const applyFlatRateDisocunt = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
};

/*const applyDiscountToCollection = (arr, discount, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], discount);
  }
};
applyDiscountToCollection(dogProducts, 0.1, applyPercentDiscount);
console.log(dogProducts);

applyDiscountToCollection(catProducts, 5, applyFlatRateDisocunt);
console.log(catProducts);*/

const applyDiscountByCategory = (category, discount, arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === category) {
      cb(arr[i], discount);
    }
  }
};

applyDiscountByCategory(1, 0.25, catProducts, applyPercentDiscount);
applyDiscountByCategory(2, 5, dogProducts, applyFlatRateDisocunt);
console.log(catProducts);
console.log(dogProducts);

const applyDiscountByInventory = (inventory, discount, arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].inventory < inventory) {
      cb(arr[i], discount);
    }
  }
};
applyDiscountByInventory(50, 1, catProducts, applyFlatRateDisocunt);
console.log(catProducts);
applyDiscountByInventory(80, 0.1, dogProducts, applyPercentDiscount);
console.log(dogProducts);
////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
function makeSandwich(bread) {
  return function (ingredients) {
    let order = `You ordered a ${bread} bread sandwich with `;
    for (let i = 0; i < ingredients.length; i++) {
      if (i === ingredients.length - 1 && i !== 0) {
        order += `and ${ingredients[i]}`;
      } else if (ingredients.length === 1) {
        order += `${ingredients[i]}.`;
      } else if (i === ingredients.length - 2) {
        order += `${ingredients[i]} `;
      } else {
        order += `${ingredients[i]},`;
      }
    }
    return order;
  };
}
const makeRyeSandwich = makeSandwich("rye");
console.log(makeRyeSandwich(["pickle", "cheese", "tomato", "cucumber"]));
