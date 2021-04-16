/**
 * @param {number} n
 * @return {number}
 */
// 暴力解法使用递归
var climbStairs = function(n) {
  const recursion = (n) => {
    if (n <= 2) {
      return n;
    }
    return recursion(n-1) + recursion(n-2)
  }
  return recursion(n);
};
console.time('time:')
console.log(climbStairs(44))
console.timeEnd('time:')