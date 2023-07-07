const best = (prices) => {
  if (prices.length < 2) return 0;
  let profit = 0;
  let lowest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - lowest);
    lowest = Math.min(lowest, prices[i]);
  }

  return profit;
};
console.log(best([15, 10, 20, 22, 1, 9])); //12;
console.log(best([1, 2, 3, 4, 5])); //4
console.log(best([2, 3, 10, 6, 4, 8, 1])); //8
console.log(best([7, 9, 5, 6, 3, 2])); // 2 - buy at $7, sell at $9
console.log(best([0, 100])); // 100 - buy at $0, sell at $100
console.log(best([5, 4, 3, 2, 1])); //0
console.log(best([100])); // 0
console.log(best([100, 0])); // 0
