const findClosestValueInBst = (node, val, currentRes) => {
  if (!node) return;
  if (node.value === val) return val;
  if (currentRes === undefined) currentRes = node.value;

  if ( Math.abs(val - node.value) < Math.abs(val - currentRes) )
    currentRes = node.value;

  if (val > node.value)
    currentRes = findClosestValueInBst(node.right, val, currentRes);
  if (val < node.value)
    currentRes = findClosestValueInBst(node.left, val, currentRes);

  return currentRes;
};
