// returns sum of all a binary tree's nodes' depths

const nodeDepths = (node, sum = 0) => {
  !node && return 0;
  sum += nodeDepths(node.left, sum + 1) + nodeDepths(node.right, sum + 1);
  return sum;
};