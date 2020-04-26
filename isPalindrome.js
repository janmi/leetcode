/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
	var j = s.length - 1;
	for (var i = 0; i < s.length; i++) {
		if (s[i] !== s[j]) {
			return false
		} else {
			j--
		}
	}
	return true;
};


// console.log(isPalindrome('noon'))
console.log(isPalindrome('A man, a plan, a canal: Panama'))