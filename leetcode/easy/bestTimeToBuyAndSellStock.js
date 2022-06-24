/*
121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/


// similar to below approach, just cleaned up
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

// less optimal approach - has extraneous curMax as well as curMin
const maxProfit = prices => {
  let curProfit = 0;
  let curMax = Infinity;
  let curMin = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < curMin) {
      curMin = prices[i];
      curMax = prices[i];
    } else if (prices[i] > curMax) {
      curMax = prices[i];
      curProfit = Math.max(curProfit, curMax - curMin);
    }
  }
  return curProfit;
};
