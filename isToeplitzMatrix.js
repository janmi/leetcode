/*
* @Author: Administrator
* @Date:   2018-04-23 16:27:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-23 18:05:37
*/
/*
  解题分析：
  toeplitz 托普利兹矩阵
  具有Ai,j = Ai+1,j+1 = ai−j，这种性质的矩阵，都叫toeplitz矩阵
  验证公式 A[i][j] = A[i+1][j+1]
 */
var isToeplitzMatrix = function (matrix) {
  var result = true
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i+1] && /\d/.test(matrix[i+1][j+1]) && matrix[i][j] != matrix[i + 1][j + 1]) {
        result = false
        break
      }
    }
  }
  return result
}

console.log(isToeplitzMatrix([[21]]))