/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
	const nums = s.match(/[0-9]/g);
	const res = [];
	let letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	letter = letter.slice(letter.indexOf(s[0]), letter.indexOf(s.split(':')[1][0]) + 1);

	for (let i = 0; i < letter.length; i++) {
		for (let j = nums[0]; j <= nums[1]; j++) {
			res.push(letter[i] + j)
		}
	}
	
	return res;
};