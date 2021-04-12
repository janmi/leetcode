/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
	if (nums.length <= 1 || k === 0) return false;

	for (var i = 0; i < nums.length; i++) {
		for (var j = i+1; i < nums.length; j++) {
			if (nums[j]) {
				if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i-j) <= k) {
					return true;
				}
			}
		}
	}
	return false
};

console.log(containsNearbyAlmostDuplicate([2,2], 3, 0)) //true j = 3， j =  2
console.log(containsNearbyAlmostDuplicate([1,2], 0, 1)) // false j = 0 j = 0
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2)) // true j = 1 j = 1
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2,3)) // false j = 


// k 位两个 item 的距离   nums[i] - nums[j] = t
// t 位两个 item 的差值.  i - j = k