/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let len = 0
  let binary = parseInt(n, 10).toString(2)
  for (var i = 0; i < binary.length; i++) {
  	if (binary[i] === '1') {
  		len++
  	}
  }
  return len
};

var hammingWeight = function(n) {
  return parseInt(n, 10).toString(2).replace(/[0]*/g, '').length
};


console.log(hammingWeight(1))