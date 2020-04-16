/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

let ListNode = {
  val: 1,
  next: { 
  		val: 0, 
  		next:  { 
  			val: 1, 
  			next: null 
  		} 
	}
}

var getDecimalValue = function(head) {
    let arr = [];
    var current = head
    while(current.next != null) {
    	arr.push(current.val)
    	current = current.next
    }
    if (current.next === null) {
    	arr.push(current.val)
    }
    return parseInt(arr.join(''), 2).toString(10);
};

console.log(getDecimalValue(ListNode))