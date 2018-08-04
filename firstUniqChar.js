/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let copyStr = s
  let result = -1
  function find () {
  	let reg = new RegExp(s[0], 'g')
  	if (s.length === 0 && s === '') return -1
  	if (s.match(reg).length === 1) {
  		result = copyStr.indexOf(s[0])
  	} else {
  		s = s.replace(reg, '')
  		find()
  	}
  }
  find()
  return result
}

console.time('time:')
console.log(firstUniqChar(""))
console.timeEnd('time:')