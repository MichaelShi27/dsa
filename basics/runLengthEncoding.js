const runLengthEncoding = string => {
  let res = [];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count++;

    if (!str[i + 1] || str[i] !== str[i + 1] || count === 9) {
      res.push(`${count}${str[i]}`)
      count = 0;
    }
  }
  return res.join('');
};


// let str = 'AAA'; // 3A
// let str = 'AAAAAAAAAAAA'; // 9A3A
let str = 'AAAAAAAAAAAAABBCCCCDD'; // 9A4A2B4C2D

console.log( runLengthEncoding(str) );