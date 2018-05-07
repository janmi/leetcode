/*
* @Author: Administrator
* @Date:   2018-05-07 10:55:22
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-07 11:08:43
*/
/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 */
/*
  解题思路：
  需要考虑到的边界情况有5种
  1、全部大写字母
  2、只有一个大写字母
  3、全部小写字母
  4、只有一个小写字母
  5、第一个为大写字母，其余为小写字母
 */
var detectCapitalUse = function(word) {
  return /^([A-Z]+|[a-z]+|[A-Z][a-z]+)$/.test(word)
};

console.log(detectCapitalUse('USA '))