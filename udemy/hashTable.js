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
    const bucket = this.keyMap[idx] || [];

    for (let i = 0; i < bucket.length; i++)
      if (bucket[i][0] === key) {
        bucket[i][1] = val;
        return;
      }
    bucket.push([ key, val ]);
    this.keyMap[idx] = bucket;
  }

  get(key) {
    const idx = this._hash(key);
    const bucket = this.keyMap[idx] || [];
    for (let el of bucket)
      if (el[0] === key) return el[1];
  }

  keys() {
    const keys = [];
    for (let bucket of this.keyMap)
      for (let el of bucket || [])
        keys.push(el[0]);
    return keys;
  }

  values() {
    const vals = [];
    const seen = new Set();
    for (let bucket of this.keyMap)
      for (let el of bucket || []) {
        const val = el[1];
        if ( seen.has(val) ) continue;
        vals.push(val);
        seen.add(val);
      }
    return vals;
  }
}

const ht = new HashTable();
ht.set('a', 1);
ht.set('b', 2);
ht.set('b', 23);
ht.set('c', 23);
console.log(ht.keys());
console.log(ht.values());
console.log(ht.get('b'));
