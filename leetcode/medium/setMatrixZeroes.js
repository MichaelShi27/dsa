// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/

// n * m time, n + m space
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
  The loops below can also be 1 nested loop going through the entire matrix, checking every spot w/r/t the 2 objects.
  I think 2 loops are more efficient than nested loops when there aren't a lot of 0s, but not as efficient when there are a lot
    - e.g. just 3 0s => 3n + 3m operations rather than n * m
    - e.g. all 0s => 2(n * m) operations rather than n * m
  */
  for (const row in rows)
    for (let c = 0; c < matrix[0].length; c++)
      matrix[row][c] = 0;

  for (const col in cols)
    for (let r = 0; r < matrix.length; r++)
      matrix[r][col] = 0;
};

// n * m time, const space
// use first item of each row/col as flag instead of using 2 objects
const setZeroes = matrix => {
  // below vars are needed bc first row & col share a first item, i.e. matrix[0][0], so if one has 0 but other doesn't,
  // the one that doesn't will still get overwritten w/ 0s if we don't account for it. we can also have a single flag var
  // to track if either first row or first col should be 0s, & use the actual matrix[0][0] for the other one
  let firstColHasZero, firstRowHasZero;

  for (let c = 0; c < matrix[0].length; c++)
    if (matrix[0][c] === 0)
      firstRowHasZero = true;
  for (let r = 0; r < matrix.length; r++)
    if (matrix[r][0] === 0)
      firstColHasZero = true;

  // record rest of 0s
  for (let c = 0; c < matrix[0].length; c++)
    for (let r = 0; r < matrix.length; r++)
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }

  // fill rows & cols
  for (let c = 1; c < matrix[0].length; c++)
    for (let r = 1; r < matrix.length; r++)
      if (matrix[r][0] === 0 || matrix[0][c] === 0)
        matrix[r][c] = 0;

  // fill 1st row & col if needed
  if (firstRowHasZero)
    for (let c = 0; c < matrix[0].length; c++)
      matrix[0][c] = 0;
  if (firstColHasZero)
    for (let r = 0; r < matrix.length; r++)
      matrix[r][0] = 0;
};

const test = [ [0,1,2,0],[3,4,5,2],[1,3,1,5] ];
setZeroes(test);
