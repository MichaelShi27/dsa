// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/

// my orig solution ************************************************************************************************************************
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

  let cur = [ 0, 0 ];
  let dir = 'right';

  while (res.length < matrix.length * matrix[0].length) {
    res.push( matrix[cur[0]][cur[1]] );
    visited[cur.join(',')] = true;

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
  const vertShift = dir === 'up' ? -1 : (dir === 'down' ? 1 : 0);
  const horizShift = dir === 'right' ? 1 : (dir === 'left' ? -1 : 0);
  return [ row + vertShift, col + horizShift ];
};

// can do something more abstract e.g. 'dir' is a num & 'nextDirs' already keeps track of
// vertShift/horizShift, e.g. [ [ 0, 1 ], [ 1, 0 ] [ 0, -1 ], [ -1, 0 ] ]
// can also use boundary vars for const space


// from LC Discussion tab ************************************************************************************************************************
// m * n time, const space
const spiralOrder = matrix => {
  let [ left, right, top, bot ] = [ 0, matrix[0].length - 1, 0, matrix.length - 1 ];
  const res = [];

  while (left <= right && top <= bot) {
    for (let i = left; i <= right; i++) // travel right, across top
      res.push(matrix[top][i]);
    top++; // "lower" the top boundary

    for (let i = top; i <= bot; i++)
      res.push(matrix[i][right]);
    right--;

    // the if-statements for the next 2 loops are for the very end
    // the while-loop condition checks for the 1st 2 loops, but then
    // the 1st 2 loops alter 'top' & 'right' so that's why we check again below
    if (top <= bot) {
      for (let i = right; i >= left; i--)
        res.push(matrix[bot][i]);
      bot--;
    }

    if (left <= right) {
      for (let i = bot; i >= top; i--)
        res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
};


// 2nd time, initial solution ************************************************************************************************************************
// mark each el as undefined as we travel past it
const spiralOrder = m => {
  const res = [];
  let r = 0, c = 0;

  while (true) {
    while (m[r][c] !== undefined) {
      res.push(m[r][c]);
      m[r][c] = undefined;
      c++;
    }
    c--; // we have to "step back" once since we're curently out of bounds
    r++;
    if (!m[r] || m[r][c] === undefined) // after moving 1 step in the next dir, check if out of bounds
      return res;

    while (m[r] && m[r][c] !== undefined) {
      res.push(m[r][c]);
      m[r][c] = undefined;
      r++;
    }
    r--;
    c--;
    if (m[r][c] === undefined)
      return res;

    while (m[r][c] !== undefined) {
      res.push(m[r][c]);
      m[r][c] = undefined;
      c--;
    }
    c++;
    r--;
    if (!m[r] || m[r][c] === undefined)
      return res;

    while (m[r][c] !== undefined) {
      res.push(m[r][c]);
      m[r][c] = undefined;
      r--;
    }
    r++;
    c++;
    if (m[r][c] === undefined)
      return res;
  }
};


// alt solution, keeping track of borders ************************************************************************************************************************
const shifts = {
  right: [ 0, 1 ],
  down: [ 1, 0 ],
  left: [ 0, -1 ],
  up: [ -1, 0 ]
};

const spiralOrder = m => {
  const res = [];
  let r = 0, c = -1;
  let dir = 'right';

  let top = 0, bottom = m.length - 1, left = 0, right = m[0].length - 1;
  const count = m.length * m[0].length;

  while (true) {
    while (c < right) {
      r += shifts.right[0];
      c += shifts.right[1];
      res.push( m[r][c] );
    }
    top++;
    if (res.length === count) break;

    while (r < bottom) {
      r += shifts.down[0];
      c += shifts.down[1];
      res.push( m[r][c] );
    }
    right--;
    if (res.length === count) break;

    while (c > left) {
      r += shifts.left[0];
      c += shifts.left[1];
      res.push( m[r][c] );
    }
    bottom--;
    if (res.length === count) break;

    while (r > top) {
      r += shifts.up[0];
      c += shifts.up[1];
      res.push( m[r][c] );
    }
    left++;
    if (res.length === count) break;
  }
  return res;
};

// more modular solution based on above approach ************************************************************************************************
const shifts = {
  right: [ 0, 1 ],
  down: [ 1, 0 ],
  left: [ 0, -1 ],
  up: [ -1, 0 ]
};
const dirs = [ 'right', 'down', 'left', 'up' ];
const getPrevDir = idx => dirs[idx - 1] || dirs[dirs.length - 1];

const spiralOrder = m => {
  const res = [];
  let r = 0, c = -1;
  let dirIdx = 0;

  const borders = {
    up: 0,
    down: m.length - 1,
    left: 0,
    right: m[0].length - 1
  };
  const count = m.length * m[0].length;

  const checkInBounds = (r, c, dir) => (
    dir === 'right' ? c < borders.right :
    dir === 'down' ? r < borders.down :
    dir === 'left' ? c > borders.left :
    r > borders.up
  );

  while (res.length < count) {
    const dir = dirs[dirIdx];
    let inBounds = true;

    while (inBounds) {
      r += shifts[dir][0];
      c += shifts[dir][1];
      res.push( m[r][c] );
      inBounds = checkInBounds(r, c, dir);
    }

    const prevDir = getPrevDir(dirIdx);
    borders[prevDir] += (prevDir === 'up' || prevDir === 'left') ? 1 : -1;
    dirIdx = (dirIdx + 1) % 4;
  }
  return res;
};
