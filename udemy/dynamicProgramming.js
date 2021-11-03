// recursive
const getNthFib1 = n => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib1(n - 1) + getNthFib1(n - 2);
};

// memoization
const getNthFib2 = (n, seen = {}) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  if (seen[n]) return seen[n];

  const res = getNthFib2(n - 1, seen) + getNthFib2(n - 2, seen);
  seen[n] = res;
  return res;
};

// tabulation
const getNthFib3 = n => {
  const arr = [ 0, 1 ];
  for (let i = 2; i < n; i++)
    arr[i] = arr[i - 1] + arr[i - 2];
  return arr[n - 1];
};

console.log(getNthFib3(45));
