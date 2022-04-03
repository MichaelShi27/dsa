// 495. Teemo Attacking
// https://leetcode.com/problems/teemo-attacking/submissions/

const findPoisonedDuration = (arr, duration) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++)
    if (arr[i] + duration - 1 >= arr[i + 1])
      sum += arr[i + 1] - arr[i];
    else
      sum += duration;

  return sum;
};

const findPoisonedDuration = (arr, duration) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    const next = arr[i + 1];
    sum += (cur + duration > next) ? (next - cur) : duration;
  }

  return sum;
};

const findPoisonedDuration = (arr, duration) => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++)
    sum += Math.min( duration, arr[i + 1] - arr[i] );
  return sum + duration;
};
