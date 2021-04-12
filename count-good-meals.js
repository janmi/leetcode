/**
 * @param {number[]} deliciousness
 * @return {number}
 */
// 暴力解法，遍历除所有可能的组合，最后返回组合总数
var countPairs = function(deliciousness) {
	let count = 0
	let activeItem = deliciousness.shift()
	var maxPow = parseInt(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(2))
	while (deliciousness.length >= 1) {
		for (let i = 0; i < deliciousness.length; i++) {
			if ((activeItem + deliciousness[i]) > 0 && Math.pow(2, maxPow) % (activeItem + deliciousness[i]) === 0) {
				count++
			}
		}
		activeItem = deliciousness.shift()
	}
	return count
};

// 两数之和解法，2的幂次方最大值为21，既0 <= n < 22
var countPairs = function(deliciousness) {
	let count = 0
	for (let i = 0; i < deliciousness.length; i++) {
		for (let j = 0; j <= 21; j++) {
			let target = Math.pow(2, j)
			let item = target - deliciousness[i]
			deliciousness.slice(i + 1).map((child, index) => {
				if (item === child) {
					count++
				}
			})
		}
	}
	return count
}