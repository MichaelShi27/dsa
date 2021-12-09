// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

// O( n log n + n )
const merge = intervals => {
  const res = [];
  intervals.sort( (a, b) => a[0] - b[0] || a[1] - b[1] );

  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i];

    while (i < intervals.length - 1) {
      const next = intervals[i + 1];

      if (next[0] <= cur[1]) {
        if (next[1] > cur[1])
          cur[1] = next[1];
        i++;
      } else break;
    }
    res.push(cur);
  }
  return res;
};

const arr = [ [ 1, 4 ],[ 1, 4 ] ];
console.log(merge(arr));


// old solution, similar to above approach
const merge = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [ intervals[0] ];

  let ptr = 0;
  for (let i = 1; i < intervals.length; i++) {
    const curInter = intervals[i];
    const resInter = res[ptr];

    if (curInter[0] <= resInter[1]) {
      if (curInter[1] > resInter[1])
        resInter[1] = curInter[1];
    } else {
      res.push(curInter);
      ptr++;
    }
  }
  return res;
};
