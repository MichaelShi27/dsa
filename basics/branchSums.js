// return a list of branch sums of BST ordered from leftmost branch sum to rightmost
// a branch is a path of nodes from root to leaf node

// dirty recursion
// const branchSums = root => {
//   let arr = [];

//   const recurse = (node, sum) => {
//     sum += node.value;
//     if (!node.left && !node.right) arr.push(sum);
//     if (node.left) recurse(node.left, sum);
//     if (node.right) recurse(node.right, sum);
//   };

//   recurse(root, 0);
//   return arr;
// };

// pure recursion
const branchSums = (node, arr = [], sum = 0) => {
  sum += node.value;
  if (!node.left && !node.right) arr.push(sum);
  if (node.left) branchSums(node.left, arr, sum);
  if (node.right) branchSums(node.right, arr, sum);

  return arr;
};

// O(n) time?