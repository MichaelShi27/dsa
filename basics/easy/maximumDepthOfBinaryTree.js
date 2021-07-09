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
 * @return {number}
 */
 var maxDepth = function(root, depth = 0, currMax = 0) {
  if (!root) return depth;

  if (currMax < depth) currMax = depth;
  let left = maxDepth(root.left, depth + 1, currMax);
  let right = maxDepth(root.right, depth + 1, currMax);

  let temp = Math.max(left, right);
  if (currMax < temp) currMax = temp;


  return currMax;
};


// var maxDepth = function(root) {
//   return !root ? 0 : 1 + Math.max( maxDepth(root.left), maxDepth(root.right) );
// };