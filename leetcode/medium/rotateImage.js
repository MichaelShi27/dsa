// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/

// store each side, then rewrite each side w/ the stored data
// n (4n) space, n^2 (8n * 0.5n = 4n^2) time?
const rotate = mtrx => {
  const rotationCycle = start => {
    const right = [], bot = [], left = [], top = [];
    const end = mtrx.length - start - 1;
    
    // store 4 sides
    for (let c = start; c <= end; c++)
      top.push(mtrx[start][c]);
    for (let r = start; r <= end; r++)
      right.push(mtrx[r][end]);
    for (let c = end; c >= start; c--)
      bot.push(mtrx[end][c]);
    for (let r = end; r >= start; r--)
      left.push(mtrx[r][start]);
    
    // overwrite in same order, traversing backwards for .pop() use
    for (let c = end; c >= start; c--)
      mtrx[start][c] = left.pop();
    for (let r = end; r >= start; r--)
      mtrx[r][end] = top.pop();
    for (let c = start; c <= end; c++)
      mtrx[end][c] = right.pop();
    for (let r = start; r <= end; r++)
      mtrx[r][start] = bot.pop();
  
    // // can also overwrite like this
    // for (let c = start, i = 0; c <= end; c++, i++)
    //   mtrx[start][c] = left[i];
    // for (let r = start, i = 0; r <= end; r++, i++)
    //   mtrx[r][end] = top[i];
    // for (let c = end, i = 0; c >= start; c--, i++)
    //   mtrx[end][c] = right[i];
    // for (let r = end, i = 0; r >= start; r--, i++)
    //   mtrx[r][start] = bot[i];
  };

  for (let i = 0; i < Math.floor(mtrx.length / 2); i++)
    rotationCycle(i);
};

// using nested loops, store & rewrite 4 els at a time
// const space
// n^2 (n * 0.5n) time? => O(m) time if m is total # of els in matrix
const rotate = mtrx => {
  const rotationCycle = start => {
    const end = mtrx.length - start - 1;
    
    for (let offset = 0; offset < end - start; offset++)
      swapRound(start, end, offset);
  };

  const swapRound = (start, end, os) => { // store & rewrite 4 els at a time
    const top = mtrx[start][start + os];
    const right = mtrx[start + os][end];
    const bot = mtrx[end][end - os];
    const left = mtrx[end - os][start];
  
    mtrx[start][start + os] = left;
    mtrx[start + os][end] = top;
    mtrx[end][end - os] = right;
    mtrx[end - os][start] = bot;  
  };

  for (let i = 0; i < Math.floor(mtrx.length / 2); i++)
    rotationCycle(i);
};

// const space, n^2 (0.5n^2 + 0.5n^2) time?
const rotate = mtrx => {
  // flip over diagonally
  for (let r = 0; r < mtrx.length; r++)
    for (let col = r; col < mtrx.length; col++)
      [ mtrx[r][col],  mtrx[col][r] ] = [ mtrx[col][r], mtrx[r][col] ];
  
  // flip vertically over middle
  for (let r = 0; r < mtrx.length; r++)
    for (let c = 0; c < Math.floor(mtrx.length / 2); c++) {
      const offset = mtrx.length - 1 - c;
      [ mtrx[r][c], mtrx[r][offset] ] = [ mtrx[r][offset], mtrx[r][c] ];
    }
};
