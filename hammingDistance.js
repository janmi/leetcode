/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	x = parseInt(x, 10).toString(2);
	y = parseInt(y, 10).toString(2);
	x = new Array(32 - x.length + 1).join('0') + x
	y = new Array(32 - y.length + 1).join('0') + y
	let hamming = 0;
	for (var i = 0; i < x.length; i++) {
		if (x[i] !== y[i]) {
			hamming++
		}
	}
	return hamming;
};

console.log(hammingDistance(1,4))