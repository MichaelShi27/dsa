// 155. Min Stack
// https://leetcode.com/problems/min-stack/

// pushing into mins every time -----------------------------------------------------------
const MinStack = function() {
  this.stack = [];
  this.mins = [];
};

MinStack.prototype.push = function(val) {
  const { stack, mins } = this;
  stack.push(val);
  const curMin = mins.length ? this.getMin() : Infinity;
  mins.push( Math.min(curMin, val) );
};

MinStack.prototype.pop = function() {
  const { mins, stack } = this;
  mins.pop();
  return stack.pop();
};

MinStack.prototype.top = function() {
  const { stack, stack: { length } } = this;
  return stack[length - 1];
};

MinStack.prototype.getMin = function() {
  const { mins, mins: { length } } = this;
  return mins[length - 1];
};


// pushing into mins only when necessary -----------------------------------------------------------
const MinStack = function() {
  this.stack = [];
  this.mins = [];
};

MinStack.prototype.push = function(val) {
  const { stack, mins } = this;
  stack.push(val);
  const curMin = mins.length ? this.getMin() : Infinity;
  if (val <= curMin)
    mins.push(val);
};

MinStack.prototype.pop = function() {
  const { mins, stack } = this;
  const popped = stack.pop();
  if (popped === this.getMin())
    mins.pop();
  return popped;
};

MinStack.prototype.top = function() {
  const { stack, stack: { length } } = this;
  return stack[length - 1];
};

MinStack.prototype.getMin = function() {
  const { mins, mins: { length } } = this;
  return mins[length - 1];
};


// similar to 1st approach but w/ 1 stack -----------------------------------------------------------
const MinStack = function() {
  this.stack = [];
};

MinStack.prototype.push = function(val) {
  const { stack } = this;
  stack.push({
    val,
    min: stack.length ? Math.min(val, this.getMin()) : val
  });
};

MinStack.prototype.pop = function() {
  const { stack } = this;
  return stack.pop();
};

MinStack.prototype.top = function() {
  const { stack, stack: { length } } = this;
  return stack[length - 1].val;
};

MinStack.prototype.getMin = function() {
  const { stack, stack: { length } } = this;
  return stack[length - 1].min;
};
