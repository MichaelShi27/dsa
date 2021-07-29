class ExampleNode {
  constructor(name){
    this.name = name;
    this.children = [];
  }

  depthFirstSearch(arr) {
    arr.push(this.name);
    for (let i = 0; i < this.children.length; i++)
      this.children[i].depthFirstSearch(arr);
    return arr;
  }

}


let k = new ExampleNode('k');
let j = new ExampleNode('j');
let i = new ExampleNode('i');
let h = new ExampleNode('h');
let g = new ExampleNode('g');
let f = new ExampleNode('f');
let e = new ExampleNode('e');
let d = new ExampleNode('d');
let c = new ExampleNode('c');
let b = new ExampleNode('b');
let a = new ExampleNode('a');
a.children.push(b, c, d);
b.children.push(e, f);
d.children.push(g, h);
f.children.push(i, j);
g.children.push(k);

console.log( a.depthFirstSearch([]) );


// depthFirstSearch(arr) {
//   arr.push(this.name);
//   for (let child of children) {
//     // recursion
//     // somehow we have to combine arrays
//   }
//   return arr;
// }


