/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = (x + '').split('');
    let isNegative = x > 0 ? true : false;
    if (arr[0] === '-' ) {
    	arr = arr.splice(1) 
    }

	arr = parseInt(arr.reverse().join(''))
	if (arr < Math.pow(-2, 31) || (arr > Math.pow(2,31) -1 )){
		return 0
	}

	return isNegative ? arr : -arr
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))