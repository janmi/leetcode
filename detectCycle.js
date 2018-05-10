/*
* @Author: Administrator
* @Date:   2018-05-10 23:29:39
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-11 00:00:03
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?
 */
/*
  解题思路：
  环形链表: 
  1、第一个节点和最后一个节点相连
  2、也可以是第N个节点和第M节点相连（目前不考虑一个链表多个环的情况）
  如果链表是环则返回环的第一个节点，可以直接修改上一题判断是否是环的函数 hasCycle，将返回值修改为当前节点即可
 */
var detectCycle = function(head) {
  // 存储返回值
  let itemNode = hasCycle(head)
  if (itemNode) {
    return itemNode
  } else {
    return null
  }
};

var hasCycle = function(head) {
  if (head === null) {
    return false
  }
  // 递归环
  var eachNode = function (ListNode) {
    if (ListNode.next === null) {
      return false
      // 环的最后一个节点指向环的第一个节点，如果 val 的值为 hasCycle, 则返回当前节点
    } else if (ListNode.val === 'hasCycle') {
      return ListNode
    } else {
      // 设置节点的值为 hasCycle, 以便用于判断是否是环
      ListNode.val = 'hasCycle'
      return eachNode(ListNode.next)
    }
  }
  return eachNode(head)
};
