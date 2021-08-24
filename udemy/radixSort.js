// const getDigit = (num, place) => {
//   const str = num.toString();
//   const temp = str.length - 1 - place;
//   return temp < 0 ? 0 : str.slice(temp, temp + 1);
// };

// const getDigit = (num, place) => {
//   let mod;
//   while (place > -1) {
//     mod = num % 10;
//     num = Math.floor(num / 10);
//     place--;
//   }
//   return mod;
// };

const getDigit = (num, place) => Math.floor( num / (10 ** place) % 10 );

// console.log( getDigit(43210, 0) );
// console.log( getDigit(43210, 2) );
// console.log( getDigit(43210, 4) );
// console.log( getDigit(43210, 5) );
// console.log( getDigit(43210, 10) );

// const radixSort = arr => {
//   const bucket0 = [];
//   const bucket1 = [];
//   const bucket2 = [];
//   const bucket3 = [];
//   const bucket4 = [];
//   const bucket5 = [];
//   const bucket6 = [];
//   const bucket7 = [];
//   const bucket8 = [];
//   const bucket9 = [];
// };