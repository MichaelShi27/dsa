// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/

// my orig solution
// m * n time, m * n space (due to 'visited')
const spiralOrder = matrix => {
  const visited = {};
  const res = [];
  const nextDirs = {
    right: 'down',
    down: 'left',
    left: 'up',
    up: 'right'
  };

  let count = 0;
  let cur = [ 0, 0 ];
  let dir = 'right';

  while (count < matrix.length * matrix[0].length) {
    res.push( matrix[cur[0]][cur[1]] );
    visited[cur.join(',')] = true;
    count++;

    let next = travel(dir, cur);
    if ( // if next step doesn't exist, or if we've visited it already
      matrix[next[0]] === undefined ||
      matrix[next[0]][next[1]] === undefined ||
      visited[next.join(',')]
    ) {
      dir = nextDirs[dir];
      next = travel(dir, cur);
    }
    cur = next;
  }
  return res;
};

const travel = (dir, [ row, col ]) => {
  const vertShift = dir === 'up' ? -1 : dir === 'down' ? 1 : 0;
  const horizShift = dir === 'right' ? 1 : dir === 'left' ? -1 : 0;
  return [ row + vertShift, col + horizShift ];
};


// can do something more abstract e.g. 'dir' is a num & 'nextDirs' already keeps track of
// vertShift/horizShift, e.g. [ [ 0, 1 ], [ 1, 0 ] [ 0, -1 ], [ -1, 0 ] ]