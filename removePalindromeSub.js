/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
	if (!s.length) return 0;
    if (s.length === 1 || s == s.split('').reverse().join('')) {
    	return 1;
    }

    // let i = 1;
    // let total = 0;
    // while (s.length > 0) {
    // 	if (s.substr(0, s.length - i) === s.substr(0, s.length - i).split('').reverse().join('')) {
    // 		s = s.substr(s.length - i, s.length)
    // 		total++;
    // 		i++;
    // 	} else if (s.substr(i, s.length) === s.substr(i, s.length).split('').reverse().join('')) {
    // 		s = s.substr(0, i)
    // 		total++;
    // 		i++;
    // 	}

    // 	if (s.length === 1) {
    // 		s = '';
    // 		total++;
    // 		break;
    // 	}

    // }
    // return total;
    // 抖机灵
    return 2;
};

console.log(removePalindromeSub('ababa')) // 1
console.log(removePalindromeSub('abb')) // 2 
console.log(removePalindromeSub('baabb')) // 2
console.log(removePalindromeSub('')) // 0