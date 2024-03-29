class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    const { values } = this;
    values.push(val);

    let idx = values.length - 1;
    while (true) {
      const parentIdx = Math.floor( (idx - 1) / 2 );
      if (idx === 0 || val <= values[parentIdx]) break;
      [ values[idx], values[parentIdx] ] = [ values[parentIdx], values[idx] ];
      idx = parentIdx;
    }
    return values;
  }

  extractMax() {
    const { values } = this;
    if (!values.length) return;

    const max = values[0];
    values[0] = values[values.length - 1];
    values.pop();

    let idx = 0;
    while (true) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;
      const leftChild = values[leftChildIdx];
      const rightChild = values[rightChildIdx];
      let swapIdx;
      if (
        leftChild === undefined && rightChild === undefined ||
        values[idx] >= leftChild && values[idx] >= rightChild ||
        !rightChild && values[idx] >= leftChild
      ) return max;

      if (rightChild === undefined) // if leftChild exists (due to nature of heap it always will before right) but right doesn't, so curr MUST be greater than leftChild
        swapIdx = leftChildIdx;
      else                          // both left & right children exist
        swapIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx;

      [ values[idx], values[swapIdx] ] = [ values[swapIdx], values[idx] ];
      idx = swapIdx;
    }
  }
}

const isHeap = arr => {
  for (let i = 0; i * 2 + 1 < arr.length; i++)
    if (arr[i] < arr[i * 2 + 1] || arr[i] < arr[i * 2 + 2])
      return false;
  return true;
}

const testExtractMax = heap => {
  while (heap.values.length > 1) {
    heap.extractMax();
    if ( !isHeap(heap.values) )
      return false;
  }
  return true;
}

const createRandomHeap = () => {
  const heap = new MaxBinaryHeap();
  const HEAP_SIZE = 100;
  const MAX_NUM = 100000;

  for (let i = 0; i < HEAP_SIZE; i++) {
    const num = Math.random() * MAX_NUM;
    heap.insert(num);
  }
  return heap;
};

const testHeaps = func => {
  const NUM_OF_TESTS = 1000;
  for (let i = 0; i < NUM_OF_TESTS; i++) {
    const heap = createRandomHeap();
    if (!func(heap)) return heap.values;
  }
  return true;
}

// const heap = new MaxBinaryHeap();
// heap.insert(17);
// heap.insert(100);
// heap.insert(36);
// heap.insert(6);
// heap.insert(12);
// heap.insert(19);
// heap.insert(25);
// heap.insert(5);
// heap.insert(9);
// heap.insert(15);
// heap.insert(13);
// heap.insert(8);
// heap.insert(1);
// heap.insert(4);
// heap.insert(11);
console.log(testHeaps(testExtractMax));