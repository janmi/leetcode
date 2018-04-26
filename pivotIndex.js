/*
* @Author: Administrator
* @Date:   2018-04-25 23:21:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-26 23:43:55
*/
/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.
 */
/*
  解题分析：
  根据题意，每一个元素都有可能满足中心索引的条件，
  排除中心索引项，判断的条件需要满足左边元素的和等于右边元素的和
  可通过循环数组，依次假设当前项为中心索引，如果其左边项和等于右边项和，将其插入中心索引集中。
  如果有中心索引，则使用 Math.min() 返回最左边的索引值，否则返回 -1 
 */
var pivotIndex = function (nums) {
  let index = []
  function sum (arr) {
    let sums = 0
    for (var i = 0; i < arr.length; i++) {
      sums += arr[i]
    }
    return sums
  }
  for (var i = 0; i < nums.length; i++) {
    if (sum(nums.slice(0, i)) == sum(nums.slice(i + 1, nums.length))) {
      index.push(i)
    }
  }
  return index.length ? Math.min(...index) : -1
}
// [-1,-1,-1,-1,-1,0]
console.log(pivotIndex([-1,-1,-1,-1,-1,0]))