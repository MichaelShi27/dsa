const findClosestValue = (node, val, currentRes = 0, currentGap = Number.POSITIVE_INFINITY) => {
  if (node.value === val) return val;
  if ( Math.abs(val - node.value) < currentGap ) {
    currentRes = node.value;
    currentGap = val - node.value;
  }

  if (val > node.value)
    findClosestValue(node.right, val, currentRes, currentGap);
  if (val < node.value)
    findClosestValue(node.left, val, currentRes, currentGap);

    return currentRes;
};
