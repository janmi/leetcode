/*
* @Author: Administrator
* @Date:   2018-04-22 15:24:35
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-22 15:57:45
*/

/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */

/*
  解题思路：
  用正则 “(1)*' 提取所有的 “1” 组合, 遍历组合，返回长度最大的值
  时间复杂度随着组合的长度增长而增长
 */
// var findMaxConsecutiveOnes = function(nums) {
//   var maxlen = 0
//   var arr = nums.join('').match(/(1)*/g)
//   if (arr) {
//     for (var i = 0; i < arr.length; i++) {
//       maxlen = Math.max(maxlen, arr[i].length)
//     }
//   }
//   return maxlen
// };

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

/*
  动态规划解法:
  时间复杂度为 O(n)
  空间复杂度为：O(1)
 */
var findMaxConsecutiveOnes = function(nums) {
  var maxlen = 0
  var maxCur = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      maxCur = 0
    } else {
      maxCur++
    }
    maxlen = Math.max(maxlen, maxCur)
  }
  return maxlen
};

console.log(findMaxConsecutiveOnes([1]))