const nbYear = (p0, percent, aug, p) => {
  let count = 0;
  while (p0 < p) {
    p0 = p0 * (1 + percent / 100) + aug;
    count++;
  }
  return count;
};

console.log(nbYear(1500, 5, 100, 5000)); // 15

console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
