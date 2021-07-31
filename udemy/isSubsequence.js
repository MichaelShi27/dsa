const isSubsequence = (targ, str) => {
  if (targ.length > str.length) return false;
  let i = 0;
  for (let j = 0; j < targ.length; j++) {
      for (; i < str.length; i++) {
          if (str[i] === targ[j]) {
              if (j === targ.length - 1)
                  return true;
              else
                  break;
          }
      }
  }
  return false;
};
