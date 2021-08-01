// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410590#overview
// findsgreatest sum of els of subarr of len n

const maxSubarraySum = (arr, n) => {
  if (n > arr.length) return null;

  let maxSum = 0;
  for (let i = 0; i < n; i++)
    maxSum += arr[i];
  let currSum = maxSum;

  for (let i = 0, j = n; j < arr.length; i++, j++) {
    currSum += arr[j] - arr[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
