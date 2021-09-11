class HashTable {
  constructor(size = 54) {
    this.keyMap = new Array(size);
  }

  _hash(key, len) {
    let sum = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++)
      sum += key.charCodeAt(i) -  96;
    return sum % len;
  }
}