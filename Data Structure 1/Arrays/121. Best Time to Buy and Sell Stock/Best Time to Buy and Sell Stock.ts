/**
 * Problem Link: {https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan&id=data-structure-i}
 */

function maxProfit(prices: number[]): number {
  let buyP: number = 0;
  let sellP: number = 1;
  let maxProfit: number = 0;

  while (sellP < prices.length) {
    if (prices[buyP] < prices[sellP]) {
      let profit = prices[sellP] - prices[buyP];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      buyP = sellP;
    }

    sellP++;
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 6, 4, 3, 1, 10]));
console.log(maxProfit([2, 4, 1]));
