class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  static getParentIdx(idx) { return Math.floor( (idx - 1) / 2 ); }

  insert(val) {
    const { values } = this;
    values.push(val);

    let idx = values.length - 1;
    while (true) {
      const parentIdx = MaxBinaryHeap.getParentIdx(idx);
      if (val <= values[parentIdx] || idx === 0) break;
      [ values[idx], values[parentIdx] ] = [ values[parentIdx], values[idx] ];
      idx = parentIdx;
    }
    return values;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(17);
heap.insert(100);
heap.insert(36);
heap.insert(6);
heap.insert(12);
heap.insert(19);
heap.insert(25);
heap.insert(5);
heap.insert(9);
heap.insert(15);
heap.insert(13);
heap.insert(8);
heap.insert(1);
heap.insert(4);
heap.insert(11);
console.log(heap.values);