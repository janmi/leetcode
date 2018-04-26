/*
* @Author: Administrator
* @Date:   2018-04-23 16:27:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-23 18:14:45
*/
/*
  解题分析：
  toeplitz 托普利兹矩阵(即在同一条对角线上的元素都相等)
  百科：
  托普利兹矩阵，简称为T型矩阵，它是由Bryc、Dembo、Jiang于2006年提出的。托普利兹矩阵的主对角线上的元素相等，平行于主对角线的线上的元素也相等；矩阵中的各元素关于次对角线对称，即T型矩阵为次对称矩阵。简单的T形矩阵包括前向位移矩阵和后向位移矩阵。在数学软件Matlab中，生成托普利兹矩阵的函数是：toeplitz(x,y)。它生成一个以 x 为第一列，y 为第一行的托普利兹矩阵，这里x, y均为向量，两者不必等长。

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