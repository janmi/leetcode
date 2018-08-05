/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const result = []
  function loop () {
  	if (!s.length) return
  	let reg = null
    // 特殊字符需要转义 "."、"\"
  	if (s[0] === '.' || s[0] === '\u005c') {
  		reg = new RegExp('\u005c' + s[0], 'g')
  	} else {
  		reg = new RegExp(s[0], 'g')
  	}
  	result.push(s.match(reg).join(''))
  	s = s.replace(reg, '')
  	loop()
  }
  loop()
  result.sort((a, b) => {
  	return b.length - a.length
  })
  return result.join('')
};
console.time('time:')
console.log(frequencySort("Mymommaalwayssaid,\\\"Lifewaslikeaboxofchocolates.Youneverknowwhatyou'regonnaget."))
console.timeEnd('time:')
