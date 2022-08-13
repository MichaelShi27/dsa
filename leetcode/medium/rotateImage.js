// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/

const rotate = matrix => {
  for (let idx = 0, rounds = Math.floor(matrix.length / 2); rounds > 0; idx++, rounds--) {
    const end = matrix.length - 1 - idx;
    const top = [], right = [], bot = [], left = [];

    // store current values
    for (let col = idx; col <= end; col++)
      top.push( matrix[idx][col] );
    for (let row = idx; row <= end; row++)
      right.push( matrix[row][end] );
    for (let col = end; col >= idx; col--)
      bot.push( matrix[end][col] );
    for (let row = end; row >= idx; row--)
      left.push( matrix[row][idx] );

    // overwrite with stored values
    for (let col = idx, i = 0; col <= end; col++, i++)
      matrix[idx][col] = left[i];
    for (let row = idx, i = 0; row <= end; row++, i++)
      matrix[row][end] = top[i];
    for (let col = end, i = 0; col >= idx; col--, i++)
      matrix[end][col] = right[i];
    for (let row = end, i = 0; row >= idx; row--, i++)
      matrix[row][idx] = bot[i];
  }
};