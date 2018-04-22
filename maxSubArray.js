/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let sum = 0
//   let sumArr = []
//   var each = function (nums) {
//     if (nums.length === 1) {
//       if (sumArr.length === 0 || nums[0] > sum) {
//         sumArr = nums
//         sum = nums[0]
//       }
//       return
//     }
//     for (var i = 0; i < nums.length; i++) {
//       let items = nums.slice(0, i + 1)
//       let itemSum = items.reduce((accumulator, currentValue) => accumulator + currentValue)
//       if (sumArr.length === 0 || itemSum > sum) {
//         sum = itemSum
//         sumArr = items
//       }
//     }
//     nums.shift()
//     each(nums)
//   }
//   each(nums)
//   return sum
// };
/*
  Kadane算法：求最大子阵列，时间复杂度为 O(n)
  算法描述：

  遍历该数组， 在遍历过程中， 将遍历到的元素依次累加起来， 当累加结果小于或等于0时， 从下一个元素开始，重新开始累加。
 */
var maxSubArray = function (nums) {
  let sum = nums[0]
  let max = sum
  for (var i = 1; i < nums.length; i++) {
    sum = nums[i] + (sum > 0 ? sum : 0)
    max = Math.max(max, sum)
  }
  return max
}

console.log(maxSubArray([-2,1,-3,4]))