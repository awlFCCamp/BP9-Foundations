const printDigits = (num) => {
  if (isNaN(num)) console.log("Not a number");
  while (num > 0) {
    console.log(num % 10);
    num = Math.floor(num / 10);
  }
};

printDigits(1);
// 1

printDigits(314);
// 4
// 1
// 3

printDigits(12);
// 2
// 1
printDigits("Hello");
