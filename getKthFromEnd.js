/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  const heads = [];
  const helper = (root) => {
    // 递归终结条件
    if(root) {
      heads.push(root.val)
      // 下探递归
      helper(root.next)
    }
  }
  helper(head)
  const child = heads.splice(heads.length - k);
  let item = new ListNode(child.splice(0,1)[0]);
  const helper2 = (root) => {
    if(child.length === 0) return;
    root.next = new ListNode(child.splice(0,1)[0])
    helper2(root.next)
  }
  // 执行当前逻辑
  helper2(item);
  return item;
};
/* 先入栈，后遍历K出栈
 */
var getKthFromEnd = function(head, k) {
  const heads = [];
  const helper = (root) => {
    if (root) {
      heads.push(root);
      helper(root.next)
    }
  }
  helper(head);
  return statck.splice(statck.length - k, 1)[0];
  // let res = null;
  // for (let i = 0; i < k; i++) {
  //   res = heads.pop()
  // }
  // return res;
}
