/**
 * @param {string} s
 * @return {string}
 */
/*
  Write a function that takes a string as input and returns the string reversed.

  Example:
  Given s = "hello", return "olleh".
 */
/*
  解题思路：
  1、将字符串转成数组
  2、将数组排序反转
  3、将数组转成字符串
 */
var reverseString = function(s) {
  const arr = s.split('')
  arr.reverse()
  return arr.join('')
};

console.log(reverseString('hello'))