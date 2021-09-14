class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    const list = this.adjacencyList;
    if (list[vertex])
      console.error('Vertex already exists!');
    else
      list[vertex] = [];
  }

  addEdge(v1, v2) {
    const list = this.adjacencyList;
    if (!list[v1] || !list[v2]) return;

    list[v1].push(v2);
    list[v2].push(v1);
  }
}

const g = new Graph();
g.addVertex('ben');
g.addVertex('zak');
g.addVertex('jack');
g.addEdge('ben', 'jack');
g.addEdge('ben', 'zak');
console.log(g.adjacencyList);
