/*
* @Author: Administrator
* @Date:   2018-05-07 23:23:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-08 16:16:15
*/
var addBinary = function (a, b) {
  let ret = []
  let addone = 0
  // 对齐字符串，方便计算
  while(a.length < b.length) {
    a = '0' + a
  }
  while(b.length < a.length) {
    b = '0' + b
  }
  // 从低位到高位，依次相加 
  for (var i = a.length - 1; i >= 0; i--) {
    let curA = parseInt(a.charAt(i))
    let curB = parseInt(b.charAt(i))
    let sum = curA + curB + addone
    // 逢2进位
    if (sum >= 2) {
      ret[i] = sum - 2
      addone = 1
    } else {
      ret[i] = sum
      addone = 0
    }
  }
  // 循环后 addone 还为 1，则再进一位，向数组第一位插入 addone
  if (addone > 0) {
    ret.unshift(addone)
  }
  return ret.join('')
}

console.log(addBinary('11', '1'))