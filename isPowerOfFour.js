/**
 * @param {number} num
 * @return {boolean}
 */

var isPowerOfFour = function(num) {
  var ret = Math.log(num) / Math.log(4)
  return (num > 0 && ret.toString().indexOf('.') === -1)
};