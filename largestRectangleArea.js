/**
 * @param {number[]} heights
 * @return {number}
 */
// 暴力解法使用双循环
var largestRectangleArea = function(heights) {
	let res = 0;
	if (heights.length <= 1 ) {
		return res = heights[0] ? heights[0] : 0
	}

	for (let i = 0; i <= heights.length; i++) {
		for (let j = i; j <= heights.length; j++) {
			let items = heights.slice(i, j+1);
			let index = items.findIndex((child, i) => {
				return i > 0 && i < items.length -1 && child === 0
			})
			if (index > -1) {
				break;
			} else {
				items = items.filter(item => item > 0);
				let area = Math.min(...items) * items.length;
				if (area > res) {
					res = area
				}
			}
		}
	}
	return res;
};

console.log(largestRectangleArea([4,7,6,8,5,9,1,26]))