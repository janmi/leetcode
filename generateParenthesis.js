/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  const recursion = (left, right, n, s) => {
    if (left === n && right === n) {
      res.push(s);
      return
    }
    if (left < n) {
      recursion(left+1, right, n, s+'(')
    }

    if (left > right) {
      recursion(left, right + 1, n, s+')')
    }
  }
  recursion(0, 0, n, '');
  return res;
};