// Implement a `map` method on this Tree class, using pseudoclassical instantiation.

//  Map accepts a mapping function as its only argument. It traverses the tree,
//  passing each node's value into the mapping function, and generates a new
//  tree containing the results.

//  So `map` should return a tree with the same structure, and different values,
//  but it should NOT modify the tree that was passed in.


var Tree = function(val) {
  this.val = val;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  const node = new Tree(value);
  this.children.push(node);
  return node;
};

Tree.prototype.map = function(func) {
  const root = new Tree( func(this.val) );
  for (let child of this.children)
    root.children.push( child.map(func) );
  return root;
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (val) {
  return val * 2;
})
console.log(newTree.val); // 2
console.log(newTree.children[0].val); // 4
console.log(newTree.children[1].val); // 6
console.log(newTree.children[0].children[1].val); // 10
console.log(newTree.children[1].children[1].val); // 14
console.log(root1.val); // still 1
