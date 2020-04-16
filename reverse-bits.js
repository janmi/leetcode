/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let num = parseInt(n, 10).toString(2);
    num = new Array(32-num.length + 1).join('0') + num;
    num = num.split('').reverse().join('');
    return parseInt(parseInt(num, 2).toString(10))
};


console.log(reverseBits(43261596))
console.log(reverseBits(4294967293))