// https://leetcode.com/problems/invert-binary-tree/
// Given the root of a binary tree, invert the tree, and return its root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
var invertTree = function(root) {
  if (!root) return;
  [ root.left, root.right ] = [ root.right, root.left ];
  invertTree(root.right);
  invertTree(root.left);
  return root;
};

const one = new TreeNode(1);
const three = new TreeNode(3);
const six = new TreeNode(6);
const nine = new TreeNode(9);
const two = new TreeNode(2, one, three);
const seven = new TreeNode(7, six, nine);
const four = new TreeNode(4, two, seven);

const printTree = (node, arr = []) => {
  if (!node) return;
  arr.push(node.val);
  printTree(node.left, arr);
  printTree(node.right, arr);
  return arr;
};

invertTree(four);

console.log(printTree(four));