// find minimum change amount that can't be created as a sum of coin vals in arr

const nonConstructibleChange = coins => {
  coins = coins.sort((a, b) => a - b);
  let currentMax = 0;

  if (coins[0] !== 1) return 1;

  for (let i = 0; i < coins.length; i++) {
    currentMax += coins[i];
    if (coins[i + 1] > currentMax + 1) break;
  }
  return currentMax + 1;
}

let coins = [ 5, 7, 1, 1, 2, 3, 22 ]; // 20
let coins = [ 5, 1, 2 ]; // 4
console.log( nonConstructibleChange(coins) );


// can also solve by switching 8 & 9, removing 5, changing coins[i + 1] to [i], return currentMax + 1 inside for loop

// derive the algo by thinking of what the first and second values in the sorted array HAVE to be, i.e. 1 and less than 3