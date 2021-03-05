// each num in an arr represents the time it takes to do that task
// find the minimum total waiting time of an array if you add up the time each task had to wait
// first el doesn't need to wait

// const minimumWaitingTime = queries => {
//   if (queries.length === 1) return 0;

//   queries = queries.sort((a, b) => a - b);
//   let sum = queries[0];
//   let prev = queries[0];

//   for (let i = 1; i < queries.length - 1; i++) {
//     prev += queries[i];
//     sum += prev;
//   }
//   return sum;
// };

const minimumWaitingTime = queries => {
  queries = queries.sort((a, b) => a - b);
  let sum = 0;
  let prev = 0;

  for (let i = 0; i < queries.length - 1; i++) {
    prev += queries[i];
    sum += prev;
  }
  return sum;
};

let arr = [ 3, 2, 1, 2, 6 ]; // 17
// let arr = [ 5, 4, 1 ]; // 6
// let arr = [ 1 ];
console.log( minimumWaitingTime(arr) );

// O(n) time, O(1) space

// alt solution: multiply current el by # of queries after