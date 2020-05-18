/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	if(new Set(nums).size < nums.length) {
		return true
	} else {
		return false
	}
};