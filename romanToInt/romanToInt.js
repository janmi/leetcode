/*
* @Author: Administrator
* @Date:   2018-03-24 14:58:50
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-26 23:56:55
*/
/*
  题目描述
  Given a roman numeral, convert it to an integer.

  Input is guaranteed to be within the range from 1 to 3999.
  给定一个罗马数字，转成整数，给定的数字范围在 1 到 3999
 */
/*
  罗马数字规则：
  I（1）、V（5）、X（10）、L（50）、C（100）、D（500）、 M（1000）
  相同的数字连写、所表示的数等于这些数字相加得到的数、如：Ⅲ=3；
  小的数字在大的数字的右边、所表示的数等于这些数字相加得到的数、 如：Ⅷ=8、Ⅻ=12；
  小的数字（限于 I、X 和 C）在大的数字的左边、所表示的数等于大数减小数得到的数、如：Ⅳ=4、Ⅸ=9；
  正常使用时、连写的数字重复不得超过三次；
  在一个数的上面画一条横线、表示这个数扩大 1000 倍。

  基本数字 Ⅰ、X 、C 中的任何一个、自身连用构成数目、或者放在大数的右边连用构成数目、都不能超过三个；放在大数的左边只能用一个；
  不能把基本数字 V 、L 、D 中的任何一个作为小数放在大数的左边采用相减的方法构成数目；放在大数的右边采用相加的方式构成数目、只能使用一个；
  more https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 */ 
/*
  解题思路：
  1、创建一个罗马数字链表： 符号：数字
  2、使用正则判断输入的罗马数字是采用加法运算 or 减法运算
  3、split 罗马数字，执行遍历进行数学运算；返回运算结果
 */

/*
  解题总结：
    分析番茄时间：
      这一步主要是了解题目目的，将罗马数字转换成阿拉伯数字；
      罗马数字的计算是有其特定的规则。小数在大数右边则可以采用加法运算；
      小数在大数的左边，则采用减法运算：大数减小数(需要特殊处理的规则),其他规则均可以采用加法运算(除上横线或者加上下标的M的情况)
    解题番茄时间：
      了解清楚规则之后，需要将罗马数字 split，遍历数组，如果符合小数在大数的左边，将当前项的值设置为负数后累加
 */

var romanToInt = function (s) {
  let result = 0
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  if (s.length === 1) return result = romanNumerals[s]
  const nums = s.split('')
  for (var i = 0; i < nums.length; i++) {
    if (romanNumerals[nums[i+1]] > romanNumerals[nums[i]]) {
      result = result - romanNumerals[nums[i]]     
    } else {
      result += romanNumerals[nums[i]] 
    }
  }

  return result
}