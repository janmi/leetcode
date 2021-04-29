/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let copy = [];
  const helper = (head) => {
    // 递归终结条件
    if(head) {
      if(head.val === val) {
        copy.push(head.next);
        return;
      }
      copy.push(head);
      helper(head.next);
    }
    
  }
  helper(head);
  for(let i = copy.length - 1; i >= 0; i--) {
    if(copy[i-1]) {
      copy[i-1].next = copy[i]
    }
  }
  return copy[0];
};