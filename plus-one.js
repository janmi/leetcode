/*
* @Author: Administrator
* @Date:   2018-06-01 15:18:26
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-01 16:54:39
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length - 1
  let itemSum = digits[index] + 1
  digits[index] = itemSum
  while (itemSum === 10) {
    digits[index] = itemSum = 0
    if (index === 0) {
      digits.unshift(1)
    } else {
      index = index - 1
      itemSum = digits[index] + 1
      if (itemSum < 10) {
        digits[index] = digits[index] + 1
      }
    }
  }
  return digits
};

console.log(plusOne([1, 2, 3]))