/*
* @Author: Administrator
* @Date:   2018-03-30 14:35:30
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-30 15:17:23
*/
/*
  解题分析：
  通过 parseInt(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(3)) 计算出 3 的最大安全指数
  然后通过3的最大幂与n求余，只要是3的幂都会为0。
  此方法同样适用于底数为 2 的情况(第 231题目)
 */
var isPowerOfThree = function (n) {
  var maxPow = parseInt(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(3))
  return (n > 0 && Math.pow(3, maxPow) % n === 0)
}

// console.log(isPowerOfThree(27))

var isPowerOfTwo = function (n) {
  var maxPow = parseInt(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(2))
  return (n > 0 && Math.pow(2, maxPow) % n === 0)
}


// console.log(isPowerOfTwo(1000))

var isPowerOfFour = function(num) {
  var maxPow = parseInt(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(4))
  return (num > 0 && Math.pow(4, maxPow) % num === 0)
};

console.log(isPowerOfFour(32))