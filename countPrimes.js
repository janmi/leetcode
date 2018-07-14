/**
 * @param {number} n
 * @return {number}
 */
 /**
  求在一个范围内的素数
  https://zh.wikipedia.org/wiki/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95
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