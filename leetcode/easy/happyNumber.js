// 202. Happy Number
// https://leetcode.com/problems/happy-number/

// iterative - obj store method
const isHappy = n => {
  let sum = 0;
  const store = {};

  while (sum !== 1 && !store[sum]) {
    store[sum] = true;
    sum = 0;
    for (const num of n.toString())
      sum += num ** 2;
    n = sum;
  }
  return sum === 1;
};

// iterative, similar to above
const isHappy = n => {
  let sum = 0;
  const store = {};

  while (sum !== 1 && !store[sum]) {
    store[sum] = true;
    sum = 0;
    while (n) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return sum === 1;
};

// iterative, floyd's algo
const isHappy = n => {
  let fast = getNext(n);
  let slow = n;
  while (fast !== 1 && fast !== slow) {
    fast = getNext( getNext(fast) );
    slow = getNext(slow);
  }
  return fast === 1;
};

const getNext = n => {
  let sum = 0;
  while (n) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
};

// recursive
const isHappy = (n, store = {}) => {
  let sum = 0;

  for (const num of n.toString())
    sum += num ** 2;

  if (store[sum])
    return false;
  else
    store[sum] = true;

  if (sum === 1) return true;
  return isHappy(sum, store);
};
