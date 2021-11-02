var lowestCommonAncestor = function(root, p, q) {
  const higherVal = Math.max(p.val, q.val);
  const lowerVal = higherVal === p.val ? q.val : p.val;

  if (
      root.val === higherVal || root.val === lowerVal ||
      (root.val < higherVal && root.val > lowerVal)
  ) return root;
  else if (root.val > higherVal)
      return lowestCommonAncestor(root.left, p, q);
  else // if (root.val < lowerVal)
      return lowestCommonAncestor(root.right, p, q);
};