class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    const list = this.adjacencyList;
    if (list[v])
      console.error('Vertex already exists!');
    else
      list[v] = [];
  }

  addEdge(v1, v2, weight) {
    const list = this.adjacencyList;
    if (!list[v1] || !list[v2]) return;

    list[v1].push({ vertex: v2, weight });
    list[v2].push({ vertex: v1, weight });
  }
}

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

const findShortestPath = (graph, start, end) => {
  const q = new PriorityQueue();
  const distances = {}; // shortest distances from each vertex to start
  const previous = {}; // holds the previous vertex for each vertex's shortest path from start

  let curr;
  q.enqueue(start, 0);

  while (q.values.length) {
    curr = q.dequeue().val;

    if (!distances[curr]) // can avoid this if-statement & the 1st if-statement in the for-loop below if a for-in-loop before the while-loop fills 'distances' out beforehand
      distances[curr] = curr === start ? 0 : Infinity;
    if (curr === end) break;

    for (let { vertex, weight } of graph[curr]) { // look at neighbors
      const currentPath = weight + distances[curr];
      if (distances[vertex] === undefined)
        distances[vertex] = Infinity;
      if (currentPath < distances[vertex]) {
        distances[vertex] = currentPath;
        previous[vertex] = curr;
        q.enqueue(vertex, weight);
      }
    }
  }

  const path = [];
  let ptr = end;
  while (previous[ptr]) {
    path.push( previous[ptr] );
    ptr = previous[ptr];
  }
  return path.reverse().concat(end);
};

const g = new WeightedGraph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');
g.addVertex('g');
g.addVertex('h');
g.addEdge('a', 'b', 4);
g.addEdge('a', 'c', 2);
g.addEdge('d', 'c', 2);
g.addEdge('f', 'c', 4);
g.addEdge('f', 'e', 1);
g.addEdge('f', 'd', 1);
g.addEdge('e', 'd', 3);
g.addEdge('e', 'b', 3);
g.addEdge('f', 'g', 1);
g.addEdge('e', 'h', 9);

const foo = () => [
  findShortestPath(g.adjacencyList, 'a', 'h'),
  findShortestPath(g.adjacencyList, 'a', 'd'),
  findShortestPath(g.adjacencyList, 'a', 'g'),
  findShortestPath(g.adjacencyList, 'a', 'e')
];

console.log( foo() );
