/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
	const numsSet = {}
	let result = []
	for (var i = 0; i < nums.length; i++) {
		numsSet[nums[i]] = numsSet[nums[i]] ? numsSet[nums[i]] + 1 : 1
	}
	result = Object.entries(numsSet)
	result.sort((a, b) => {
		return b[1] - a[1]
	})
	let ret = []
	for (var i = 0; i < k; i++) {
		ret.push(Number(result[i][0]))
	}
	console.log(result)
	return ret
}

console.time('time:')
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))
console.timeEnd('time:')
