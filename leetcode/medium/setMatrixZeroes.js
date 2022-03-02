// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/


const setZeroes = matrix => {
  const rows = {};
  const cols = {};

  for (let c = 0; c < matrix[0].length; c++)
    for (let r = 0; r < matrix.length; r++)
      if (matrix[r][c] === 0) {
        rows[r] = true;
        cols[c] = true;
      }

  /*
  Can also use nested loops & check every spot w/r/t the 2 objects.
  I think 2 for-loops are more efficient than nexted loops when there aren't a lot of 0s, but not as efficient when there are a lot
    - e.g. just 3 0s => time is 3n + 3m rather than n * m
    - e.g. all 0s => time is 2(n * m) rather than n * m
  */

  for (const row in rows)
    for (let c = 0; c < matrix[0].length; c++)
      matrix[row][c] = 0;

  for (const col in cols)
    for (let r = 0; r < matrix.length; r++)
      matrix[r][col] = 0;
};
