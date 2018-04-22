/*
* @Author: Administrator
* @Date:   2018-03-27 23:02:54
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-28 23:14:13
*/
//https://leetcode.com/problems/merge-two-sorted-lists/description/
var mergeTwoLists = function(l1, l2) {
  var arr = l1
  if (arguments.length === 2) {
    arr = l1.concat(l2)
  }

  var len = arr.length
  if (len < 2) {
    return arr
  }
  var middle = Math.floor(len / 2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle)

  return merge(mergeTwoLists(left), mergeTwoLists(right));
};

function merge (left, right) {
  var result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

console.log(mergeTwoLists([1,2,4], [1,3,4]))
