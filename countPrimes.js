/**
 * @param {number} n
 * @return {number}
 */
 /**
  求在一个范围内的素数
 */

var countPrimes = function(n) {
	let nums = []
	let primeNumber = []
	console.time('start1:')
	for (let i = 2; i < n; i++) {
		nums.push(i)
	}
	console.timeEnd("start1:")
	for (var j = 0; j < nums.length; j++) {
		if (nums[j] * nums[j] > n) return nums.length
		for (var k = j+1; k < nums.length; k++) {
			if (nums[k] % nums[j] === 0) {
				nums.splice(k, 1)
			}
		}
	}
	return nums.length
};

console.time('start:')
console.log(countPrimes(499979))
console.timeEnd('start:')