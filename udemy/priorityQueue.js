// can make an arr and just store priority for each el with each el, then iterate over each time to find highest prio
// but usually they're done with heaps

// lower value for prio often means higher prio

class Node {
  constructor() {
    this.val = null;
    this.prio = null;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    const { values } = this;
    values.push(node);

    let idx = values.length - 1;
    while (true) {
      const parentIdx = Math.floor( (idx - 1) / 2 );
      if (idx === 0 || node.prio >= values[parentIdx].prio) break;
      [ values[idx], values[parentIdx] ] = [ values[parentIdx], values[idx] ];
      idx = parentIdx;
    }
    return values;
  }

  dequeue() {
    const { values } = this;
    if (!values.length) return;

    const highestPrio = values[0];
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
        !rightChild && values[idx].prio <= leftChild.prio ||
        values[idx].prio <= leftChild.prio && values[idx].prio <= rightChild.prio
      ) return highestPrio;

      if (rightChild === undefined) // if leftChild exists (due to nature of heap it always will before right) but right doesn't, so curr MUST be greater than leftChild
        swapIdx = leftChildIdx;
      else                          // both left & right children exist
        swapIdx = leftChild.prio < rightChild.prio ? leftChildIdx : rightChildIdx;

      [ values[idx], values[swapIdx] ] = [ values[swapIdx], values[idx] ];
      idx = swapIdx;
    }
  }
}

const isHeap = arr => {
  for (let i = 0; i * 2 + 1 < arr.length; i++) {
    const leftChildIdx = i * 2 + 1;
    const rightChildIdx = i * 2 + 2;
    if (
      arr[rightChildIdx] && arr[i].prio > arr[rightChildIdx].prio ||
      arr[i].prio > arr[leftChildIdx].prio
    ) return false;
  }
  return true;
}

const testDequeue = heap => {
  while (heap.values.length > 1) {
    heap.dequeue();
    if ( !isHeap(heap.values) )
      return false;
  }
  return true;
}

const createRandomHeap = () => {
  const heap = new PriorityQueue();
  const HEAP_SIZE = 100;
  const MAX_VAL = 100000;
  const MAX_PRIO = 100;

  for (let i = 0; i < HEAP_SIZE; i++) {
    const val = Math.random() * MAX_VAL;
    const prio = Math.floor( Math.random() * MAX_PRIO );
    heap.enqueue({ val: val, prio: prio });
  }
  return heap;
};

const testHeaps = func => {
  const NUM_OF_TESTS = 10000;
  for (let i = 0; i < NUM_OF_TESTS; i++) {
    const heap = createRandomHeap();
    if (!func(heap)) return false;
  }
  return true;
}

console.log( testHeaps(testDequeue) );
