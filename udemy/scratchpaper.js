// const foo = (a, b, c) => {
//   if (a && (!b || !c)) return true;
//   else return false;
// }

// const bar = (a, b, c) => {
//   if (a && !b && !c) return true;
//   else return false;
// }

// const test = () => {
//   for (let a = true, i = 0; i < 2; i++) {
//     for (let b = true, j = 0; j < 2; j++) {
//       for (let c = true, k = 0; k < 2; k++) {
//         if ( foo(a, b, c) !== bar(a, b, c) )
//           console.log('fail:', a, b, c);
//         c = false;
//       }
//       b = false;
//     }
//     a = false;
//   }
// };
// test();
