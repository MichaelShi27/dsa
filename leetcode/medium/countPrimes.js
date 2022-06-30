// 204. Count Primes
// https://leetcode.com/problems/count-primes/


// sieve of eratosthenes using array
/*
2 optimizations:
- j = i ** 2 instead of j = 2i in inner loop
  - there's no point in checking below i ** 2 bc all the multiples of i below i ** 2 will have been checked off by earlier cycles. for example, if i = 5,
    we start at 25. the lower multiples are 10, 15, & 20, aka 5 * 2, 5 * 3, & 5 * 4. these values will have been checked off in the previous iterations
    of the outer loop, when we checked off all multiples of 2, 3, & 4
- i < (n ** 0.5) instead of i < n in outer loop
  - this is sort of building off the logic of the previous optimization. there's no point in even attempting to run iterations of the outer loop once we go past n ** 0.5,
    since j starts at i ** 2 and has to be less than n for the inner loop to run. if i > n ** 0.5, i ** 2 will be greater than n & the inner loop won't run, thus we can
    just save the trouble & cut off the outer loop once i hits that point
*/
const countPrimes = n => {
  const arr = new Array(n);

  for (let i = 2; i < n ** 0.5; i++) {
    if (arr[i] === false) continue;
    for (let j = i ** 2; j < n; j += i)
      arr[j] = false;
  }

  let count = 0;
  for (let i = 2; i < n; i++) // can get rid of this loop & increment count in above loop, but then have to use i < n as condition
    if (arr[i] !== false)
      count++;

  return count;
};

// sieve of eratosthenes (object is supposedly faster than arrays on paper
// but actually isn't, prob bc array elements are stored consecutively in memory)
const countPrimes = n => {
  if (n === 3) return 1;
  if (n === 2 || n === 1 || n === 0) return 0;

  const obj = {};
  for (let i = 3; i < n; i += 2)
    obj[i] = true;

  for (let i = 3; i < n ** 0.5; i += 2) {
    for (let j = i ** 2; j < n; j += i) {
      if (obj[j] === undefined) continue;
      delete obj[j];
    }
  }
  return Object.keys(obj).length + 1;
};

// sieve w/ object, but runtime error
const countPrimes = n => {
  if (n === 3) return 1;
  if (n === 2 || n === 1 || n === 0) return 0;

  const obj = {};

  for (let i = 2; i < n ** 0.5; i++) {
    if (obj[i]) continue;
    for (let j = i ** 2; j < n; j += i)
      obj[j] = true;
  }
  return n - Object.keys(obj).length - 2;
};

// // brute force (n^2), runtime error
// const countPrimes = n => {
//   if (n < 3) return 0;

//   let count = 1;
//   if (n === 3) return count;

//   for (let i = 3; i < n; i += 2)
//     if (isPrime(i))
//       count++;

//   return count;
// };

// const isPrime = num => {
//   for (let i = 3; i < (num / 2); i += 2)
//     if (num % i === 0)
//       return false;
//   return true;
// };
