/**
 * @param {number} numRows
 * @return {number[][]}
 */

 /*
	解题分析：
	假设一个 X 轴、Y轴坐标，X 轴为数组横向索引、Y轴为竖轴索引 
	当前每一项SUMx的值等于上一个x-1数组的 y 项和相邻的 y+1 项的和。
	SUMx = X-1[y] + X-1[y +1]
 */
var generate = function(numRows) {
  let reslut = []
  for (var i = 0; i < numRows; i++) {
  	let item = [1]
  	for (var j = 0; j < i; j++) {
  		let X = i - 1
  		let child = 0
  		if (j === X) {
  			child = (1)
  		} else {
  			child = reslut[X][j] + reslut[X][j + 1]
  		}
  		item.push(child)
  	}
  	reslut.push(item)
  }
  return reslut
}

console.log(generate(5))
