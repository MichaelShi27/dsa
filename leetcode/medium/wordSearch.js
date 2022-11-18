// 79. Word Search
// https://leetcode.com/problems/word-search/

const exist = (board, word) => {
  const search = (row, col, idx) => { // this func goes off initial letter & recursively attempts to find the whole word
    if (idx >= word.length) return true;
    board[row][col] = null; // mark position as visited - we'll unmark it at the bottom of this func if full word isn't found

    const neighbors = [ [ row + 1, col ], [ row - 1, col ], [ row, col + 1 ], [ row, col - 1 ] ];
    for (const [ r, c ] of neighbors)
      if (checkNeighbor(r, c, word[idx]))
        if (search(r, c, idx + 1))
          return true;
    board[row][col] = word[idx - 1];
    return false;
  };

  const checkNeighbor = (r, c, char) => {
    if (
      r >= board.length || r < 0 ||
      c >= board[0].length || c < 0 ||
      board[r][c] !== char // this will trigger if it's null i.e. already visited
    ) return false;
    return true;
  };

  for (let row = 0; row < board.length; row++) // these loops look for initial letter
    for (let col = 0; col < board[0].length; col++)
      if (board[row][col] === word[0] && search(row, col, 1))
        return true;
  return false;
};


// similar approach, but we start search w/ idx 0 instead of 1
const exist = (board, word) => {
  const search = (row, col, idx) => {
    if (idx >= word.length) return true;
    if (board[row][col] !== word[idx]) return false; // this is a check for idx 0
    board[row][col] = null;

    const neighbors = [ [ row + 1, col ], [ row - 1, col ], [ row, col + 1 ], [ row, col - 1 ] ];
    for (const [ r, c ] of neighbors) {
      if (idx === word.length - 1) return true; // need this line
      if ( checkNeighbor(r, c, word[idx + 1]) )
        if (search(r, c, idx + 1))
          return true;
    }
    board[row][col] = word[idx];
    return false;
  };

  const checkNeighbor = (r, c, char) => {
    if (
      r >= board.length || r < 0 ||
      c >= board[0].length || c < 0 ||
      board[r][c] !== char
    ) return false;
    return true;
  };

  for (let row = 0; row < board.length; row++) // these loops look for initial letter
    for (let col = 0; col < board[0].length; col++)
      if (search(row, col, 0))
        return true;
  return false;
};


// using 2 funcs total, idea is similar
const exist = (board, word) => {
  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board[0].length; c++)
      if (board[r][c] === word[0])
        if (checkNeighbors( board, r, c, word ))
          return true;
  return false;
};

const checkNeighbors = (board, r, c, word) => {
  if (word.length === 0) return true;
  if (
    r < 0 || r >= board.length ||
    c < 0 || c >= board[0].length ||
    board[r][c] !== word[0]
  ) return false;

  board[r][c] = null;
  
  const neighbors = [
    [ r + 1, c ], [ r, c + 1 ],
    [ r - 1, c ], [ r,  c - 1 ]
  ];
  for (const [ row, col ] of neighbors)
    if (checkNeighbors( board, row, col, word.slice(1) ))
      return true;
  board[r][c] = word[0];
  return false;
};
