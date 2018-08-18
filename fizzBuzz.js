/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = []
  for (var i = 1; i <= n; i++) {
  	let item = i
  	if (i % 3 === 0) {
  		item = 'Fizz'
  	}
  	if (i % 5 === 0) {
  		item = 'Buzz'
  	}
  	if (i % 3 === 0 && i % 5 === 0) {
  		item = 'FizzBuzz'
  	}
  	result.push(String(item))
  }
  return result
}

console.log(fizzBuzz(150))