/*
* @Author: Administrator
* @Date:   2018-06-01 19:31:51
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-01 19:45:12
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let lastIndex = nums.length - 1
  for (var i = nums.length - 1; i > (lastIndex - k); i--) {
    let item = nums.splice(lastIndex, 1)[0]
    nums.unshift(item)
  }
  return nums
};

console.log(rotate([1,2,3,4,5,6,7], 10))