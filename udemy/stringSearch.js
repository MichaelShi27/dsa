const stringSearch = (str, targ) => {
  let ct = 0;

  for (let i = 0; i < str.length; i++)
    for (let j = 0; j < targ.length; j++) {
      if (targ[j] !== str[i + j])
        break;
      if (j === targ.length - 1)
        ct++;
    }

  return ct;
};

let str = 'zzzzzz'; // 3
let targ = 'zz';
console.log(stringSearch(str, targ));