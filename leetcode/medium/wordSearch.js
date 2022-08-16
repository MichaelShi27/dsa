// 79. Word Search
// https://leetcode.com/problems/word-search/

const exist = (board, word) => {
  let wordExists = false;;
  for (let row = 0; row < board.length; row++) // these loops look for initial letter
    for (let col = 0; col < board[0].length; col++)
      if (board[row][col] === word[0]) {
          wordExists = search(board, word, row, col, 1);
          if (wordExists) return wordExists;
      }
  return wordExists;
};

const search = (board, word, row, col, idx) => { // this func goes off initial letter & recursively attempts to find the whole word
  if (idx >= word.length) return true;
  board[row][col] = null; // mark position as visited - we'll unmark it at the bottom of this func if full word isn't found

  let found = false;
  const neighbors = [ [ row + 1, col ], [ row - 1, col ], [ row, col + 1 ], [ row, col - 1 ] ];
  for (const [ r, c ] of neighbors)
    if ( checkNeighbor(r, c, board, word[idx]) ) {
      found = search(board, word, r, c, idx + 1);
      if (found) return found;
    }
  board[row][col] = word[idx - 1];
  return false;
};

const checkNeighbor = (r, c, board, char) => {
  if (
    r >= board.length || r < 0 ||
    c >= board[0].length || c < 0 ||
    board[r][c] === null || // we've already visited
    board[r][c] !== char
  ) return false;
  return true;
};
