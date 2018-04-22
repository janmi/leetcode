/*
 * @Author: Administrator
 * @Date:   2018-03-28 23:27:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-03-29 09:35:47
 */
// https://leetcode.com/problems/search-insert-position/description/
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target)
  if (index > -1) {
    return index
  } else {
    nums.push(target)
  }
  nums.sort((a, b) => {
    return a - b
  })
  return nums.indexOf(target)
};

console.log(searchInsert([1,3,5,6], 7))