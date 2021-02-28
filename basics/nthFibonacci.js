const getNthFib = n => { // exponential (2^n)
  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
};

console.log( getNthFib(6) );

// memoize + recursive solution => linear time, lin space
// dont have to repeat operations

// iterative solution => linear time, const space
// store last 2 fibs
// literally just the basic brute force solution lmfao