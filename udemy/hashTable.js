class HashTable {
  constructor(size = 54) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const WEIRD_PRIME = 31;
    let sum = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++)
      sum = sum * WEIRD_PRIME + key.charCodeAt(i) -  96;
    return sum % this.keyMap.length;
  }

  set(key, val) {
    const idx = this._hash(key);
    if (!this.keyMap[idx])
      this.keyMap[idx] = [];
    this.keyMap[idx].push([ key, val ]);
  }

  get(key) {
    const idx = this._hash(key);
    const bucket = this.keyMap[idx];
    if (bucket)
      for (let el of bucket)
        if (el[0] === key) return el[1];
    return;
  }
}

const ht = new HashTable();
ht.set('a', 1);
ht.set('b', 2);
console.log(ht.keyMap);
console.log(ht.get('b'))