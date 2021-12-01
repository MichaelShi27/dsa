/*
121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

const maxProfit = prices => {
  let profit = 0;
  let currLowest; // idx, not val

  for (let i = 0; i < prices.length; i++) {
    if (i === prices.length - 1)
      return profit;
    if (prices[i + 1] > prices[i]) {
      currLowest = i;
      break;
    }
  }

  for (let i = currLowest + 1; i < prices.length; i++) {
    const diff = prices[i] - prices[currLowest];
    if (diff > profit)
      profit = diff;
    if (prices[i] < prices[currLowest])
      currLowest = i;
  }
  return profit;
};

// similar to above approach, just cleaned up
const maxProfit = prices => {
  let profit = 0;
  let lowestVal = Infinity;

  for (let i = 0; i < prices.length; i++)
    if (prices[i] < lowestVal)
      lowestVal = prices[i];
    else
      profit = Math.max(profit, prices[i] - lowestVal);
  return profit;
};
