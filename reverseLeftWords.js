/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  s = s.split('');
  if(n > s.length) {
    n = s.length % n;
  }
  s.push(...s.splice(0, n));
  return s.join('');
};