/**
 * @param {string} s
 * @return {string}
 */

 /*
 解体分析：
 1、获取字符集的每一项生成一个正则（全局匹配），使用 match 方法，提取到相同的字符，并且组合成一个字符，将该字符在原字符集的所有字符都替换为空
 2、将新组合的字符进行降序排列
 3、需要考虑特殊情况转移 . 和 \
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
