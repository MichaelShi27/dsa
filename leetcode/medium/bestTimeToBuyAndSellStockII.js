// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = prices => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++)
    if (prices[i + 1] > prices[i])
      maxProfit += prices[i + 1] - prices[i];
  return maxProfit;
};
