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

// O(n log n)
const removeCoveredIntervals1 = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  // left & right represent the interval that currently covers the most space, where it is still possible that future intervals could fall inside
  let left = -1;
  let right = -1;
  let uncovered = 0;

  for (const [ curStart, curEnd ] of intervals)
    if (curEnd > right) {
      if (curStart > left) {
        uncovered++;
        left = curStart;
      }
      right = curEnd;
    }

  return uncovered;
};

// can also sort so if left els of intervals are equal, then sort right els in reverse order
// in this case, only previous intervals can cover current interval, i.e. current can't ever cover previous ones
// now we only check cur1, since due to sorting, if cur1 > right we already know cur0 is also greater
// essentially, this sort eliminates the possibility of = >
const removeCoveredIntervals2 = intervals => {
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

// from Discussion page => tracks the covered intervals, rather than uncovered - note that it sorts 2nd el in reverse order
const removeCoveredIntervals3 = intervals => {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let covered = 0;

  // prev is basically [ left, right ] i.e. last uncovered => like above solution, if cur is uncovered we update, always keeping track of last uncovered
  for (let prev = 0, cur = 1; cur < intervals.length; cur++) {
    const [ prevStart, prevEnd ] = intervals[prev];
    const [ curStart, curEnd ] = intervals[cur];

    if (prevStart <= curStart && prevEnd >= curEnd)
      covered++;
    else
      prev = cur;
  }
  return intervals.length - covered;
};

// also from Discussion - tracking uncovered, n space
const removeCoveredIntervals4 = intervals => {
  intervals.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  const uncovered = [];
  uncovered.push(intervals.pop());

  while (intervals.length > 0) {
    const [ curStart, curEnd ] = intervals.pop();
    const [ prevStart, prevEnd ] = uncovered[uncovered.length - 1];

    if (curStart >= prevStart && curEnd <= prevEnd) // can simplify this if-else a la removeCoveredIntervals2
      continue;
    else
      uncovered.push([ curStart, curEnd ]);
  }
  return uncovered.length;
};

// 2nd time - similar to removeCoveredIntervals2 but w/ 2 pointers instead of 1 => I believe the main diff is the sort
const removeCoveredIntervals5 = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  let [ bigStart, bigEnd ] = [ null, -1 ]; // can also start at intervals[0], but then have to return uncovered + 1 at end

  let uncovered = 0;
  for (const [ curStart, curEnd ] of intervals)
    if (curStart === bigStart)
      bigEnd = Math.max(bigEnd, curEnd);
    else if (curEnd > bigEnd) {
      [ bigStart, bigEnd ] = [ curStart, curEnd ];
      uncovered++;
    }

  return uncovered;
};

const removeCoveredIntervals6 = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);

  let [ start, end ] = intervals[0];
  let covered = 0;

  for (let i = 1; i < intervals.length; i++) {
    const [ curStart, curEnd ] = intervals[i];
    if (curStart > start && curEnd > end) // if uncovered
      [ start, end ] = [ curStart, curEnd ];
    else {
      covered++;
      if (end < curEnd) // bottom int covered => update start & end
        [ start, end ] = [ curStart, curEnd ];
    }
  }
  return intervals.length - covered;
};

// sorting 2nd els in ascending order
const removeCoveredIntervals7 = intervals => {
  intervals.sort( (a, b) => a[0] - b[0] || (a[1] - b[1]) );
  let [ start, end ] = intervals[0];
  let covered = 0;

  for (let i = 1; i < intervals.length; i++) {
      const [ curStart, curEnd ] = intervals[i];
      if (curStart > start && curEnd > end) // if uncovered
        start = curStart;
      else
        covered++;
      end = Math.max(curEnd, end);
  }
  return intervals.length - covered;
};
