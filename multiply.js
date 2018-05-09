/*
* @Author: Administrator
* @Date:   2018-05-09 10:41:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-09 15:08:36
*/
/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */
/*
  解题分析：
  两数相乘，可以用第一个数分别乘第二个数的每一位数（除个位数之外，随着位数的增长需要依次补 0 ），然后在把对每一位数的乘积相加即可等到总的乘积。
  需要考虑的边界情况：
  1、如果传入的值为 0 ，则返回 0
  2、如果传入字符串数字长度过长，当转成数字之后无法保证精度（超过16位会丢失精度、超过21位会自动转成科学计数法表示，同时精度丢失，所以不可以直接转成数字进行相乘或者相加
  可以先将字符串数字转成数组, 依次乘第二个数的每一位，得到的积如果大于10，则大于 10 的部分进位，剩余部位存入数组中；小于 10 的积存入数组中。将当前数组存入二维数组中。依次循环
  二维数组中存储的是乘积，还需要依次相加来获得最终的乘积
 */
var multiply = function (num1, num2) {
  let twoArr = []
  let ret = []
  // 边界情况 num 为 0
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  // 将字符串转为数组，并反转
  let numArr1 = num1.split('').map(item => {
    return parseInt(item)
  }).reverse()

  let numArr2 = num2.split('').map(item => {
    return parseInt(item)
  }).reverse()
  // 计算第一个数分别乘第二个数的每一位数的乘积，并存储到二维数组中
  for (var i = 0; i < numArr1.length; i++) {
    let item = []
    let addone = 0
    for (var j = 0; j < numArr2.length; j++) {
      let product = numArr1[i] * numArr2[j] + addone
      if (product >= 10) {
        // 乘积大于10的部位进位，剩余部位存储
        let twoDigits = /(\d)(\d)/.exec(product)
        addone = parseInt(twoDigits[1])
        item.unshift(parseInt(twoDigits[2]))
      } else {
        item.unshift(product)
        addone = 0
      }
    }
    // 循环结束后依然存在进位，则把进位存入数组第一位
    if (addone >= 1) {
      item.unshift(addone)
    }
    // 十位、百位、千位等的积需要补 0
    item = item.concat(new Array(i).fill(0))
    twoArr.unshift(item)
  }
  // 乘积累加
  ret = twoArr.splice(0, 1)[0]
  while (twoArr.length) {
    ret = addNumbers(ret, (twoArr.splice(0, 1)[0]))
  }
  return ret.join('')
}
var addNumbers = function (a, b) {
  let ret = []
  let addone = 0
  // 对齐数组，方便循环
  while (a.length < b.length) {
    a.unshift(0)
  }
  while (a.length > b.length) {
    b.unshift(0)
  }
  // 倒序循环数组，a、b当前项相加，如果和超过10，则进一（和下一项相加），超出10的部分存入数组中；如果和小于10，则将和存入数组中
  for (var i = a.length - 1; i >= 0; i--) {
    let sum = a[i] + b[i] + addone
    if( sum >= 10) {
      addone = 1
      ret[i] = sum - 10
    } else {
      ret[i] = sum
      addone = 0
    }
  }
  // 最后a、b项和超出10，则进一(数组开头插入1)
  if (addone === 1) {
    ret.unshift(addone)
  }
  return ret
}
console.log(multiply('10', '1000'))