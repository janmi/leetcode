/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let maxWordsLen = 0;

  for (let i = 0; i < sentences.length; i++) {
    maxWordsLen = Math.max(sentences[i].split(' ').length, maxWordsLen);
  }

  return maxWordsLen;
};