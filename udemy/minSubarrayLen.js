const minSubArrayLen = (arr, targ) => {
  let currMin = Infinity;
  let currSum;

  for (let i = 0, j = 0; j < arr.length;) {
      if (i === j)
          currSum = arr[i];
      if (currSum >= targ) {
          if (i === j)
              return 1;
          currMin = Math.min(currMin, j - i + 1);
          currSum -= arr[i];
          i++;
      } else {
          j++;
          currSum += arr[j];
      }
  }

  return currMin === Infinity ? 0 : currMin;
};