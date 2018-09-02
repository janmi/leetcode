/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let result = ''
  num = parseInt(num, 10).toString(2)
  for (var i = 0; i < num.length; i++) {
  	if (num[i] === '1') {
  		result += '0'
  	} else {
  		result += '1'
  	}
  }
  return parseInt(parseInt(result, 2).toString(10))
}

console.log(findComplement(5))
console.log(findComplement(1))
console.log(findComplement(3))