/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力解法
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    let item = target - nums[i];
    if(nums.includes(item)) {
      return [nums[i], item]
    }
  }
};
// 双指针（对撞指针）
// 因为是从小到大的有序数组，如果左指针和右指针返回的项的 sum 等于target；既返回，如果 sum 小于 target, 说明左指针的项小了，需要右移一位，如果大于 target，说明右指针的项大了，需要左移一位。
// 
var twoSum = function(nums, target) {
	let i = 0;
	let j = nums.length - 1;
	const helper = () => {
		let sum = nums[i] + nums[j];
		// 递归终止条件
		if (sum === target) {
			return [nums[i], nums[j]];
		} else if (sum < target) {
			// 下探递归
			i++;
			return helper();
		} else {
			// 下探递归
			j--;
			return helper();
		}
	}
	return helper();
}
console.log(twoSum([2,7,11,15], 9))