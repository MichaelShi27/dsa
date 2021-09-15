class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, prio) {
    this.values.push({ val, prio });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort( (a, b) => a.prio - b.prio );
  }
}

// const findShortestPath = () => {
//   const visited = [];
//   const previous = {};
//   const distances = {};
//   let shortest;
// };