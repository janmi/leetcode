/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let valid = true;
  const stack = [];
  const mapper = {
  	'{': '}',
  	'(': ')',
  	'[': ']'
  }

  for (var i = 0; i < s.length; i++) {
  	if (/[{([]+/.test(s[i])) {
  		stack.push(s[i])
  	} else {
  		let peak = stack.pop()
  		if (s[i] !== mapper[peak]) {
  			return false;
  		}
  	}
  }
  if (stack.length > 0) return false;

  return true;
};

console.log(isValid('()'))
console.log(isValid('([])'))
console.log(isValid('([)]'))