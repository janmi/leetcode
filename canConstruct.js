/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const len = ransomNote.length
    const result = []
    for (var i = 0; i < len; i++) {
    	if (magazine.indexOf(ransomNote[i]) > -1) {
    		magazine = magazine.replace(ransomNote[i], '')
    		result.push(1)
    	} else {
    		return false
    	}
    }
    return result.length === len
}

console.log(canConstruct('aa', 'aba'))