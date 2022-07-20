/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
	if (s.length === 2) return [s];

	const res = [];
	let index = 0;
	let len = 2;

	while ((index + len) <= s.length) {
		let child = s.substr(index, len);

		if (child.match(/R/g) && child.length / child.match(/R/g).length === 2) {
			res.push(child);

			index = index + len;
			len = 2;
		} else {
			len = len + 2 
		}
	}

	return res.length;
};

balancedStringSplit('RRLL')
balancedStringSplit('RLRRLLRLRL')
balancedStringSplit('RLLLLRRRLR')
balancedStringSplit('LLLLRRRR')
balancedStringSplit('RLRRRLLRLL')

