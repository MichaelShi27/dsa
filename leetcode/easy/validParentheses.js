// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/submissions/

// n time, n space
const isValid = str => {
  const map = { "(": ")", "[" : "]", "{" : "}" };
  const stack = [];

  for (const char of str)
    if (map[char])
      stack.push(map[char]);
    else if (stack.pop() !== char)
      return false;

  return stack.length === 0;
};
