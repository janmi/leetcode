/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let result = ''
  for (var i = 0; i < s.length; i++) {
  	t = t.replace(s[i], '')
  }
  return t
};

console.time('s:')
console.log(findTheDifference('abcd', 'abcde'))
console.timeEnd('s:')