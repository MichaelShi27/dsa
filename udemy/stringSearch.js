const stringSearch = (str, targ) => {
  let ct = 0;

  for (let i = 0; i < str.length; i++)
    if (str[i] === targ[0])
      for (let j = 1, temp = i + 1; j < targ.length; j++, temp++) {
        if (targ[j] !== str[temp])
          break;
        if (j === targ.length - 1)
          ct++;
      }

  return ct;
};

let str = 'zzz zz'; // 2
let targ = 'zz';
console.log(stringSearch(str, targ));