// 435. Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/

// from NeetCode vid: https://www.youtube.com/watch?v=nONCGxWoUfM
// basically if we find overlap, we remove the interval that ends later to minimize chances of further overlaps
const eraseOverlapIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);

  let ct = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++)
    if (end > intervals[i][0]) {
      ct++;
      end = Math.min( end, intervals[i][1] );
    } else
      end = intervals[i][1];
  return ct;
};

// even better approach - similar, but sort by end times
const eraseOverlapIntervals = intervals => {
  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1]
  let ct = 0;

  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][0] < end)
      ct++;
    else
      end = intervals[i][1];
  return ct;
};
