// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = prices => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++)
    if (prices[i + 1] > prices[i])
      maxProfit += prices[i + 1] - prices[i];
  return maxProfit;
};

// less optimal
const maxProfit = prices => {
  let boughtAt = null;
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    const [ cur, next ] = [ prices[i], prices[i + 1] ];
    if (boughtAt !== null && (next < cur || next === undefined)) {
      sum += cur - boughtAt;
      boughtAt = null;
    } else if (boughtAt === null && next > cur)
      boughtAt = cur;
  }
  return sum;
};
