/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//   nums.sort((a, b) => {
//   	return b - a
//   })
//   for (var i = 0; i < nums.length; i++) {
//   	if (nums[i] - nums[i +1] >= 2) {
//   		return nums[i] - 1
//   	}
//   }
// };


var missingNumber = function(nums) {
	let result
	nums.sort((a, b) => {
  	return b - a
  })
  for (var i = 0; i < nums.length; i++) {
		if (nums[i] - nums[i +1] >= 2) {
  		return nums[i] - 1
  	}
  }
	if (!result) {
		if (nums[nums.length -1] === 0) {
			result = nums[0] + 1
		} else {
			result = 0 
		}
	}
	return result
};


console.log(missingNumber([0,1,2,3]))