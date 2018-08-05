/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
解体分析：
1、遍历数组，生成 键：数字出现次数的对象集
2、对象集进行降序排列
3、循环 k 次，奖满足条件的项 push 入数组中，并返回
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
	return ret
}

console.time('time:')
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))
console.timeEnd('time:')
