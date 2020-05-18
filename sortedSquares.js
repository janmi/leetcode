/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
	return A.map(a => Math.pow(a, 2)).sort((a, b) => {
		return a - b;
	})
};


console.log(sortedSquares([-4,-1,0,3,10]))