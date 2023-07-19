const findOutlier = (arr) => {
  let odds = [];
  let evens = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
      if (evens.length > 0 && odds.length > 1) {
        return num;
      }
    } else {
      odds.push(num);
      if (odds.length > 0 && evens.length > 1) {
        return num;
      }
    }
  }
  return odds.length > evens.length ? evens[0] : odds[0];
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //160
