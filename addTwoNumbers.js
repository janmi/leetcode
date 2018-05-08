/*
* @Author: Administrator
* @Date:   2018-05-08 16:29:46
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-08 23:33:52
*/
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
  特殊情况： 链表比较长，生成的数字 会被转化成  科学计数法(1e+23)
 */
var addTwoNumbers = function(l1, l2) {
  let l = []
  let ret = []
  let addone = 0
  // 读取链表，生成反序数组
  var eachNode = function (listNode) {
    l.push(listNode.val)
    if (listNode.next != null) {
      return eachNode(listNode.next)
    } else {
      return l.reverse()
    }
  }

  let a = eachNode(l1)
  // 递归完成之后，还原 l 默认值
  l = []
  let b = eachNode(l2)

  // 对齐数组，方便循环
  while (a.length < b.length) {
    a.unshift(0)
  }
  while (a.length > b.length) {
    b.unshift(0)
  }
  // 倒序循环数组，a、b当前项相加，如果和超过10，则进一（和下一项相加），超出10的部分存入数组中；如果和小于10，则将和存入数组中
  for (var i = a.length - 1; i >= 0; i--) {
    let sum = a[i] + b[i] + addone
    if( sum >= 10) {
      addone = 1
      ret[i] = sum - 10
    } else {
      ret[i] = sum
      addone = 0
    }
  }
  // 最后a、b项和超出10，则进一(数组开头插入1)
  if (addone === 1) {
    ret.unshift(addone)
  }
  // 反转数组返回
  return ret.reverse()
};


// console.log(addTwoNumbers({
//   val: 2,
//   next: { val: 4, next: { val: 3, next: null}}}, {
//   val: 5,
//   next: { val: 6, next: { val: 4, next: null}}}))
// console.log(addTwoNumbers({
//   val: 9,
//   next: { val: 8, next: null}}, {
//   val: 1,
//   next: null}))
console.log(addTwoNumbers({
  val: 5,
  next: null}, {
  val: 5,
  next: null}))