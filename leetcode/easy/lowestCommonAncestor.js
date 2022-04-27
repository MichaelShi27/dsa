// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// recursive, n time & space?
const lowestCommonAncestor = (root, p, q) => {
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  return root; // if root.val = either, or is between them
};

// iterative, n time const space?
const lowestCommonAncestor = (root, p, q) => {
  while (true)
    if (root.val < p.val && root.val < q.val)
      root = root.right;
    else if (root.val > p.val && root.val > q.val)
      root = root.left;
    else
      return root;
};

// not a good solution, bc we have to check isDescendant (n time) n times
const lowestCommonAncestor = (root, p, q) => {
  let curLowest = null;

  if (isDescendant(root, p) && isDescendant(root, q))
    curLowest = root;

  if (root.val < p.val && root.val < q.val) // only need to check this "half" of tree if both nodes are on that side
    curLowest = lowestCommonAncestor(root.right, p, q) || curLowest;
  else if (root.val > p.val && root.val > q.val)
    curLowest = lowestCommonAncestor(root.left, p, q) || curLowest;

  return curLowest;
};

const isDescendant = (root, node) => root && ( root === node || isDescendant(root.left, node) || isDescendant(root.right, node) );
