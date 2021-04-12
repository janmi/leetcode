/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if ([...s].sort().join('') == [...t].sort().join('')) {
		return true
	} else {
		return false
	}
};

console.log(isAnagram('anagram' , 'nagaram'))