/**
 * [maxLetters description]
 * @param  {[String]} s [description]
 * @return {[String]}   [description]
 */
var maxLetters = function(s) {
	let letter = '';
	let num = 0;
	for (var i = 0; i < s.length; i++) {
		let regLetter = new RegExp(s[i], 'g');
		let LettersLen = s.match(regLetter).join('').length
		if(LettersLen > num) {
			letter = s[i];
			num = LettersLen
		}
	}
	return letter
}

console.log(maxLetters('aasssdsxsdsasxfssasvgsa'))