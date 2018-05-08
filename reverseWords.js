/*
* @Author: Administrator
* @Date:   2018-05-08 16:20:06
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-08 16:24:17
*/
/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

var reverseWords = function(s) {
  let arr = s.split(/\s/)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = reverseString(arr[i])
  }
  return arr.join(' ')
};

var reverseString = function(s) {
  const arr = s.split('')
  arr.reverse()
  return arr.join('')
};

console.log(reverseWords("Let's take LeetCode contest"))
