// 先进先出
var CQueue = function() {
  this.queue = []
  this.delQueue = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  if(this.delQueue.length === 0) {
    this.delQueue.unshift(value)
  } else {
    this.queue.unshift(value)
  }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if(!this.delQueue.length) return -1;
  let res = this.delQueue[0]
  this.delQueue = [];
  if(this.queue.length) {
    this.delQueue.push(this.queue.pop())
  }
  return res;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */