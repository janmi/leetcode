/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  const statck = []
  const helper = (root) => {
    if(root) {
      statck.push(root.val)
      helper(root.next)
    }
  }
  helper(head)
  return statck.reverse()
};

var reversePrint = function(head) {
  const statck = []
  const helper = (root) => {
    // 递归终止条件
    if(!root) return; 
    statck.unshift(root.val)
    helper(root.next);
  }
  helper(head)
  return statck;
};