// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

// O( n log n + n )
// alter the elements in the input arr to accumulate overlaps & push them
const merge = intervals => {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i];

    while (i < intervals.length - 1) {
      const next = intervals[i + 1];

      if (next[0] > cur[1]) break;
      cur[1] = Math.max(cur[1], next[1]);
      i++;
    }
    res.push(cur);
  }
  return res;
};

const arr = [ [ 1, 4 ],[ 1, 4 ] ];
console.log(merge(arr));


// old solution - similar to above approach, but accumulation is stored directly in 'res'
const merge = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [ intervals[0] ];

  for (const interval of intervals) {
    const mostRecent = res[res.length - 1];

    if (interval[0] <= mostRecent[1])
      mostRecent[1] = Math.max(interval[1], mostRecent[1]);
    else
      res.push(interval);
  }
  return res;
};

// very similar solution to above, but from Solution tab (if/else inside the for-loop is essentially reversed)
const merge = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  for (const interval of intervals) {
    const mostRecent = res[res.length - 1];
    if (!res.length || mostRecent[1] < interval[0])
      res.push(interval);
    else if (mostRecent[1] < interval[1])
     mostRecent[1] = interval[1];
  }
  return res;
};

// 2nd time - 2 pointers for accumulation
const merge = intervals => {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let [ bigStart, bigEnd ] = intervals[0]; // start & end of the current "big" interval that will accumulate overlaps

  for (const [ curStart, curEnd ] of intervals) {
    if (curStart > bigEnd) {
      res.push([ bigStart, bigEnd ]);
      [ bigStart, bigEnd ] = [ curStart, curEnd ];
    } else
      bigEnd = Math.max(bigEnd, curEnd);
  }
  res.push([ bigStart, bigEnd ]);
  return res;
};
