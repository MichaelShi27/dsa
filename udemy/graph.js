class Graph {
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

  removeVertex(v) {
    const list = this.adjacencyList;
    if (!list[v]) return;

    for (let el of list[v])
      list[el] = list[el].filter(val => val !== v); // can also use this.removeEdge, but that's extra work since it removes "this side" of each edge

    delete list[v];
  }

  addEdge(v1, v2) {
    const list = this.adjacencyList;
    if (!list[v1] || !list[v2]) return;

    list[v1].push(v2);
    list[v2].push(v1);
  }

  removeEdge(v1, v2) {
    const list = this.adjacencyList;
    if (!list[v1] || !list[v2]) return;

    // // this approach is faster than 2 for-loops/2 .filters when the arrays are very long
    // let firstSideRemoved, secondSideRemoved;
    // const maxLength = Math.max(list[v1].length, list[v2].length);
    // for (let i = 0; i < maxLength && (!firstSideRemoved || !secondSideRemoved); i++) {
    //   if (!firstSideRemoved && list[v1][i] === v2) {
    //     list[v1].splice(i, 1);
    //     firstSideRemoved = true;
    //   }
    //   if (!secondSideRemoved && list[v2][i] === v1) {
    //     list[v2].splice(i, 1);
    //     secondSideRemoved = true;
    //   }
    // }
    list[v1] = list[v1].filter(val => val !== v2);
    list[v2] = list[v2].filter(val => val !== v1);
  }
}

const g = new Graph();
g.addVertex('ben');
g.addVertex('zak');
g.addVertex('jack');
g.addEdge('ben', 'jack');
g.addEdge('ben', 'zak');
g.removeVertex('ben');
console.log(g.adjacencyList);
