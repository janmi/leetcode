/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
 */

/*
  解题思路：
  循环字符串，i 每次增长 k，从 0 开始，每隔一段 k 距离就会有一段 k 长度的字符串满足反转条件
  假设字符串：“abcdefg”，key 为 2
  依次增长
  (0, 2): (0 / 2) % 2 = 0 满足条件
  (2, 4)：(2 / 2) % 2 = 1 不满足条件
  (4, 6)：(4 / 2) % 2 = 0 满足条件
  (6, 8)：(6 / 2) % 2 = 1 不满足条件
  可以发现，当求于为 0 时，会满足反转条件。
  所以可得以下公式： (i / k) % 2 === 0 (即满足反转条件)，根据索引 slice(i, i + k) 截取要反转的字符；
  不满足反转条件的，根据索引 slice(i, i + k) 截取字符串；
  然后拼接字符串；

  边界条件
  1、k = 1，直接返回原字符串
 */
var reverseStr = function(s, k) {
  let reverseStr = ''
  for (let i = 0; i <= s.length; i = i + k) {
    let item = ''
    if ((i / k) % 2 === 0) {
      item = s.slice(i, i + k)
      item = reverseString(item)
    } else {
      item = s.slice(i, i + k)
    }
    reverseStr += item
  }
  return reverseStr
};

var reverseString = function(s) {
  const arr = s.split('')
  arr.reverse()
  return arr.join('')
};

console.log(reverseStr('a', 1))