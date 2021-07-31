function areThereDuplicates(...args) {
  const o = {};
  for (let arg of args) {
      if (o[arg]) return true;
      o[arg] = true;
  }
  return false;
}