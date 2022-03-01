// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

// my original solution
// O(m * n) time (m & n being # of rows & cols in matrix)
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
  row++;
  col++;
  while (row < matrix.length && col < matrix[0].length) {
    if (matrix[row][col] !== matrix[row - 1][col - 1])
      return false;
    row++;
    col++;
  }
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
