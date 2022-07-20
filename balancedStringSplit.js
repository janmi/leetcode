/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
	if (s.length === 2) return [s];

	let index = 0;
	let len = 2;
	let count = 0;

	while ((index + len) <= s.length) {
		let child = s.substr(index, len);

		if ((child.length / child.replace(/L/g, '').length) === 2) {
			count++

			index = index + len;
			len = 2;
		} else {
			len = len + 2 
		}
	}

	return count;
};

balancedStringSplit('RRLL')
balancedStringSplit('RLRRLLRLRL')
balancedStringSplit('RLLLLRRRLR')
balancedStringSplit('LLLLRRRR')
balancedStringSplit('RLRRRLLRLL')

