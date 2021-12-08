// 1288. Remove Covered Intervals
// https://leetcode.com/problems/remove-covered-intervals/

// after sorting by the first el of intervals, the only situation in which an interval is uncovered is if both curInt[0] > left && curInt[1] > right
// [ cur0, cur1 ] = curInt
// 5 possible situations (would be 6 if intervals weren't all unique): cur0 can be = or > left, and cur1 can be >, <, or = right
  // = <, = >, > <. > =, > > (last one is only situation where it's uncovered)
    // in the first 5 situations, "someone" will be covered, whether it's cur or [ left, right ]
    // if cur1 > right, we update right since it's the new max that covers the most space
    // we only update left if both cur0 > left & cur1 > right, since if cur1 <= right then the old left will still cover more space
// since all intervals are unique, there will be at least 1 uncovered interval (so we can start left & right at -1)

// O(n)
const removeCoveredIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  // left & right represent the interval that currently covers the most space, where it is still possible that future intervals could fall inside
  let left = -1;
  let right = -1;
  let uncovered = 0;

  for (let interval of intervals) {
    const [ cur0, cur1 ] = interval;
    if (cur0 > left && cur1 > right) {
      uncovered++;
      left = cur0;
    }
    if (cur1 > right)
      right = cur1;
  }
  return uncovered;
};

// similar to above, just condensed
const removeCoveredIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  let uncovered = 0;

  for (let left = -1, right = -1, i = 0; i < intervals.length; i++) {
    const [ cur0, cur1 ] = intervals[i];
    if (cur1 > right) {
      if (cur0 > left) {
        uncovered++;
        left = cur0;
      }
      right = cur1;
    }
  }
  return uncovered;
};

// can also sort so if left els of intervals are equal, then sort right els in reverse order
// in this case, only previous intervals can cover current interval, i.e. current can't ever cover previous ones
// now we only check cur1, since due to sorting, if cur1 > right we already know cur0 is also greater
// essentially, this sort eliminates the possibility of = >
const removeCoveredIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let uncovered = 0;

  for (let right = -1, i = 0; i < intervals.length; i++) {
    const curRight = intervals[i][1];
    if (curRight > right) {
      uncovered++;
      right = curRight;
    }
  }
  return uncovered;
};
