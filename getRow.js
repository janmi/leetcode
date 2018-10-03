/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 /*
解题分析： 
n 为行
k 为列
用这个公式可以直接计算杨辉三角里任何的数： C(n,k) = n! / k!(n - k)!
 */
var getRow = function(rowIndex) {
  let rowIndexProduct = factorial(rowIndex)
  let rows = []
  for (var i = 0; i < rowIndex; i++) {
  	let item = rowIndexProduct / (factorial(i) * factorial((rowIndex - i)))
  	rows.push(item)
  }
  rows.push(1)
  return rows
};

function factorial(n){
  if (n <= 1)
    return 1;
  else
    return (n * factorial(n - 1));
}

console.log(getRow(1))