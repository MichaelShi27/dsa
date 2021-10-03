// recursive
const getNthFib1 = n => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib1(n - 1) + getNthFib1(n - 2);
};

// memoization
const getNthFib2 = (n, o = {}) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  if (o[n]) return o[n];

  const res = getNthFib2(n - 1, o) + getNthFib2(n - 2, o);
  o[n] = res;
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
