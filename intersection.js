/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	let num = []
    for (var i = 0; i < nums1.length; i++) {
    	if (nums2.indexOf(nums1[i]) > -1 && num.indexOf(nums1[i]) === -1) {
    		num.push(nums1[i])
    	}
    }
    return num
};

console.log(intersection([1], [2,1]))