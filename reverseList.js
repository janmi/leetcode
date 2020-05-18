/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
 拿出第一个节点和第二个节点， 第二个节点的next指向第一个节点，第一个节点的next指向null，使用一个变量存储第二个节点的next，
 之后循环节点，不断的取出链表中的节点指向之前反转号的链表
 */

var head = { val: 1,
  next: { val: 2, next: { val: 3, next: {val: 4, next: { val: 5, next: null }} } } }

var reverseList = function(head) {
    if(!head || !head.next) return head;

	let current = {
		val: head.val,
		next: null
	};
	
	head = head.next
	let dummy = null;

	while (head.next) {
		dummy = head.next
		head.next = current
		current = head 
		head = dummy
	}
	head.next = current
	return head
};

console.log(reverseList(head))