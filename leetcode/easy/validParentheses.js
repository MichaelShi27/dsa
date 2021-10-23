// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true



var isValid = function(str) {
  // init obj to map pairs
  // init empty stack

  // iterate thru str
      // if obj[curr] => curr is an opener
          // stack.push(obj[curr])
  // else => curr is a closer
      // if stack.pop() !== curr
          // return false

  // return true;

  const obj = { "(": ")", "[" : "]", "{" : "}" };
  const stack = [];

  for (let char of str) {
      if (obj[char])
          stack.push(obj[char]);
      else
          if (stack.pop() !== char)
              return false;
  }
  return stack.length === 0;
};