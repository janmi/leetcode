/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	for (var i = 0; i < nums.length - 1; i++) {
		let j = nums.indexOf(nums[i], i+1);
		if (j!= -1 && (j-i) <= k) {
			return true;
		}
	}
	return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
