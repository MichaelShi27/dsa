// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.


/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
* @param {number} val
* @return {void}
*/

// also possible to only push to minStack when there's a new min, not every time
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  let currMin = this.minStack[this.minStack.length - 1];
  if (!this.minStack.length || val < currMin) this.minStack.push(val);
  else this.minStack.push(currMin);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/