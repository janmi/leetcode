/*
* @Author: Administrator
* @Date:   2018-03-26 22:08:13
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-26 23:47:45
*/
/*
  题目描述：
  Given an array and a value, remove all instances of that value in-place and return the new length.

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */
/*
  解题分析 and 思路：
  根据题目要求，只能操作输入的数组，不可以在内存中分配新的数组进行操作
  splice方法可以改变自身长度，又可以删除特定项。但是使用 splice 会修改原数组，影响循环准确性；
  可以使用递归来决解这个问题，递归的边界条件为数组中不含有 target
 */
var removeElement = function(nums, val) {
  const remove = function () {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1)
      }
    }
    if (nums.indexOf(val) > -1) {
      remove()
    }
  }
  remove()
  return nums.length
};