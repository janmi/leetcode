
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	const keyboards = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z','X','C', 'V', 'B', 'N', 'M']]
	let result = []
	for (var i = 0; i < words.length; i++) {
		for (var j = 0; j < keyboards.length; j++) {
			let item = ''
			for (var k = 0; k < words[i].length; k++) {
				if (keyboards[j].indexOf(words[i][k].toLocaleUpperCase()) > -1) {
					item += words[i][k]
				} else {
					break
				}
			}
			if (item === words[i]) {
				result.push(item)
			}
		}
	}
	return result
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))