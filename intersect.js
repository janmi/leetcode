/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let num = []
    for (var i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i])
    	if (index > -1) {
    		nums2.splice(index, 1)
    		num.push(nums1[i])
    	}
    }
    return num
};

console.log(intersect([1,2,2,1], [2]))