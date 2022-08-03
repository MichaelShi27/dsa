// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/

// based off NeetCode solution: https://www.youtube.com/watch?v=A8NUOmlwOlM
// n time, n space
/*
- 3 possibilities for if/else-if/else:
  - newInt ends before cur (after which we're basically done & can return early)
  - newInt ends after cur (in which case we worry about it later)
  - newInt and cur overlap somehow (merge the 2 into newInt using Math.max & Math.min)
- consider if 'intervals' is empty or if we never hit 1st option (i.e. we finish loop still merging intervals) => push newInt at end
*/
const insert = (intervals, newInterval) => {
  let [ newStart, newEnd ] = newInterval;

  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    let [ curStart, curEnd ] = intervals[i];

    if (newEnd < curStart) {
      res.push([ newStart, newEnd ]);
      return res.concat( intervals.slice(i) );
    } else if (newStart > curEnd)
      res.push([ curStart, curEnd ]);
    else {
      newStart = Math.min(newStart, curStart);
      newEnd = Math.max(newEnd, curEnd);
    }
  }

  res.push([ newStart, newEnd ]);
  return res;
};

// from LC discussion
const insert = (intervals, newInterval) => {
  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    const int = intervals[i];

    // if overlaps (3rd option above)
    if ( Math.max(int[0], newInterval[0]) <= Math.min(int[1], newInterval[1]) ) { // p cool way to account for all overlaps
      newInterval = [
        Math.min( int[0], newInterval[0] ),
        Math.max( int[1], newInterval[1] )
      ];
      continue;
    }

    // if lower (1st option above)
    if (int[0] > newInterval[1]) {
      res.push(newInterval, ...intervals.slice(i));
      return res;
    }

    res.push(int);
  }

  res.push(newInterval);
  return res;
};

// orig approach
// n time but overly complicated
const insert = (intervals, newInterval) => {
  const [ newStart, newEnd ] = newInterval;

  const res = [];
  if (!intervals.length || newEnd < intervals[0][0])
    res.push(newInterval);


  for (let i = 0; i < intervals.length; i++) {
    let [ curStart, curEnd ] = intervals[i];
    if ( newStart >= curStart && newStart <= curEnd || (curStart >= newStart && curStart <= newEnd) ) {
      let [ tempStart, tempEnd ] = [ curStart, curEnd ];
      while (curStart <= newEnd && i < intervals.length) {
        tempStart = Math.min(curStart, newStart, tempStart);
        tempEnd = Math.max(curEnd, newEnd);
        i++;
        intervals[i] && ( [ curStart, curEnd ] = intervals[i] );
      }
      res.push([ tempStart, tempEnd ]);
      i--;
    } else {
      if (intervals[i - 1] && newStart > intervals[i - 1][1] && newEnd < curStart)
        res.push(newInterval);
      res.push([ curStart, curEnd ]);
    }
  }

  if (intervals.length && newStart > intervals[intervals.length - 1][1])
    res.push(newInterval);
  return res;
};
