// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

// my original solution
// O(m * n) time (m & n being # of rows & cols in matrix)
// const space
const isToeplitzMatrix = matrix => {
  for (let row = 0; row < matrix.length; row++)
    if (!checkDiagonal(row, 0, matrix))
      return false;
  for (let col = 1; col < matrix[0].length; col++)
    if (!checkDiagonal(0, col, matrix))
      return false;
  return true;
};

const checkDiagonal = (row, col, matrix) => {
  while (row < matrix.length - 1 && col < matrix[0].length - 1) {
    if (matrix[row][col] !== matrix[row + 1][col + 1])
      return false;
    row++;
    col++;
  }
  return true;
};

// alt solution from LC solution tab:
/*
We ask what feature makes two coordinates (r1, c1) and (r2, c2) belong to the same diagonal?
It turns out two coordinates are on the same diagonal if and only if r1 - c1 == r2 - c2.
This leads to the following idea: remember the value of the current diagonal as diagonals[r-c].
If we see a mismatch, the matrix is not Toeplitz; otherwise it is.
*/
// n * m time, n + m space
const isToeplitzMatrix = matrix => {
  const diagonals = {};
  for (let r = 0; r < matrix.length; r++)
    for (let c = 0; c < matrix.length; c++) {
      const diff = r - c;
      const curVal = matrix[r][c];
      if (diagonals[diff] === undefined)
        diagonals[diff] = curVal;
      else if (diagonals[diff] !== curVal)
        return false;
    }
  return true;
};

// alt solution from LC solution tab:
// m * n time, const space
const isToeplitzMatrix = matrix => {
  for (let r = 0; r < matrix.length; r++)
    for (let c = 0; c < matrix.length; c++)
      if (row > 0 && col > 0 && matrix[r][c] !== matrix[r - 1][c - 1])
        return false;
  return true;
};

// from LC discussion tab - rly obvious in hindsight lmao
const isToeplitzMatrix = matrix => {
  for (let r = 0; r < matrix.length - 1; r++)
    for (let c = 0; c < matrix[0].length - 1; c++)
      if (matrix[r][c] !== matrix[r + 1][c + 1])
        return false;
  return true;
};

// from discussion tab
const isToeplitzMatrix = matrix => {
  for (let i = matrix.length - 1; i > 0; i--)
    if (matrix[i].slice(1, matrix[i].length).join('') !== matrix[i - 1].slice(0, matrix[i].length - 1).join(''))
      return false;
  return true;
};

const m1 = [
  [0, 1, 2],
  [3, 0, 1],
  [4, 3, 0],
  [5, 4, 3]
];

const m2 = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1]
];

const m3 = [
  [ '0 0', '0 1', '0 2', '0 3', '0 4' ],
  [ '1 0', '1 1', '1 2', '1 3', '1 4' ],
  [ '2 0', '2 1', '2 2', '2 3', '2 4' ],
  [ '3 0', '3 1', '3 2', '3 3', '3 4' ],
  [ '4 0', '4 1', '4 2', '4 3', '4 4' ],
  [ '5 0', '5 1', '5 2', '5 3', '5 4' ],
];

console.log( isToeplitz(m1) === true );
console.log( isToeplitz(m2) === false );
