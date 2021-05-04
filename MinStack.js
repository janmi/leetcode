/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minItem = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if(this.minItem === null) this.minItem = x;
  if(x < this.minItem) {
    this.minItem = x
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.splice(this.stack.length - 1, 1);
  if(this.stack.length) {
    this.minItem = Math.min(...this.stack);
  } else {
    this.minItem = null
  }

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
MinStack.prototype.min = function() {
  return this.minItem;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */