/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewels = J.split('')
  let len = 0
  for (var i = 0; i < jewels.length; i++) {
    let reg = new RegExp(jewels[i], ['g'])
    let stones = S.match(reg)
    if (stones) {
      len += stones.length
    }
  }
  return len
};

console.log(numJewelsInStones('aA', 'ZZZZZZ'))