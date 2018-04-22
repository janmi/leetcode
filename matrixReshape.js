/*
* @Author: Administrator
* @Date:   2018-04-20 17:00:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-20 18:53:55
*/
/*
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 */
/*
  解题思路：
  1、将二维数组转化为一维数组
  2、判断是否是可以转化的合理矩阵；判断条件为原始矩阵的元素数是否等于新矩阵的元素数(矩阵的元素数=行* 列)，不等于返回原始矩阵。
  3、根据r、c(行、列)转化为新的数组。
 */
var matrixReshape = function (nums, r, c) {
  var newNums = []
  var matrix = []
  var oldr = nums.length
  var oldc = nums[0].length
  if (oldr * oldc != r * c) {
    return nums
  }
  for (var i = 0; i < nums.length; i++) {
    newNums = newNums.concat(...nums[i])
  }
  for (var i = 0; i < r; i++) {
    matrix.push(newNums.splice(0, c))
  }
  return matrix
  // var reshaped = []
  // for (var i = 0; i < r * c; i++) {
  //   reshaped[i / c] = []
  //   reshaped[i / c][i % c] = nums[i / oldc][i % oldc]
  // }
  // return reshaped
}

console.log(matrixReshape([[1,2], [3,4]], 1, 4))