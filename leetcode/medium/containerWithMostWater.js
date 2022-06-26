// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

const maxArea = heights => {
  let maxArea = 0;
  let curArea = 0;
  for (let i = 0, j = heights.length - 1; i < j;) {
    curArea = (j - i) * Math.min(heights[i], heights[j]);
    maxArea = Math.max(maxArea, curArea);
    if (heights[i] < heights[j])
      i++;
    else
      j--;
  }
  return maxArea;
};
