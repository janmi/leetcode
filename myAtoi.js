/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (str === ' ') return 0;
    let whitespaceIndex = str.indexOf(' ');
    if (str[whitespaceIndex] === ' ') {
    	str = str.trim();
    	if (!/([-]|\d)/.test(str[0])) {
    		return 0
    	} else if (!/([-]|\d)/.test(str[whitespaceIndex+1])){
    		return 0
    	}
    };

    let nums = []
    const reg = /[-]?\d+/;
    let num = str.match(reg);
    if (num) {
    	num = parseInt(num[0])
    }

    if (num < Math.pow(-2, 31) || (num > Math.pow(2,31) -1 )){
		return 0;
	}

	return num;
};

console.log(myAtoi(' 42'))
console.log(myAtoi(' -42'))
console.log(myAtoi('带单词的4193'))
console.log(myAtoi('带单词的-4193'))
console.log(myAtoi(' words and 987'))
console.log(myAtoi(' -91283472332'))
console.log(myAtoi(' -wwww42'))
console.log(myAtoi("   -42"))
console.log(myAtoi("words and 987"))
