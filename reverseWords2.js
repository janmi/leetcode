/*
* @Author: Administrator
* @Date:   2018-06-01 21:02:37
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-01 21:29:41
*/
/**
 Given an input string, reverse the string word by word.

  Example:  

  Input: "the sky is blue",
  Output: "blue is sky the".
  Note:

  A word is defined as a sequence of non-space characters.
  Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
  You need to reduce multiple spaces between two words to a single space in the reversed string.
  Follow up: For C programmers, try to solve it in-place in O(1) space.
 */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  let arrStr = str.split(/\s/)
  let newStr = ''
  for (var i = arrStr.length; i >= 0; i--) {
    let item = arrStr[i]
    if (item) {
      newStr += item + ' '
    }
  }
  return newStr.substr(0, newStr.length - 1)
};

console.log(reverseWords('the sky  is blue '))