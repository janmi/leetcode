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

// 第二种采用指针算法，比第一种更简洁，但是时间相差不大，线性的
var deleteNode = function(head, val) {
  if (head.val === val) return head.next
  let prev = head;
  let cur = head.next;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      cur = null;
      return head;
    }
    prev = cur;
    cur = cur.next;
  }
}