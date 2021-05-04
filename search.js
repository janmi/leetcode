/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 */
var search = function(nums, target) {
  return nums.filter(item => { return item === target }).length;
};

var search = function(nums, target) {
  let index = nums.indexOf(target);
  let lastIndexOf = nums.lastIndexOf(target);
  if(index > -1 && lastIndexOf > -1) {
    return (lastIndexOf - index) + 1
  } else if(index > -1 || lastIndexOf > -1) {
    return 1
  } else {
    return 0
  }
};
// 时间算法最优解，双指针同时走
var search = function(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let count = 0;
	while (left <= right) {
		if (nums[left] === target && nums[right] === target) {
			return (right - left) + 1;
		}
		if (nums[left] !== target) {
			left++
		}
		if (nums[right] !== target) {
			right--
		}
	}
	return count;
}
console.log(search([5,7,7,8,8,8,8,8,10], 8))
