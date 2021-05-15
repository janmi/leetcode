/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const uglyNumbers = [1,2,3,4,5];
  if(n <= 5) return uglyNumbers[n];
  // 暴力解法
  for(let i = 6; i < Number.MAX_SAFE_INTEGER; i++) {
    // 循环终止条件
    if(uglyNumbers.length === n) return uglyNumbers[uglyNumbers.length - 1];
    // 判断丑数逻辑
    // 只进行一次除法，除得结果在数组查找是否存在，存在就是丑数
    if(uglyNumbers.indexOf(i/2) > -1) {
      uglyNumbers.push(i)
    } else if(uglyNumbers.indexOf(i/5) > -1) {
      uglyNumbers.push(i)
    } else if(uglyNumbers.indexOf(i/3) > -1) {
      uglyNumbers.push(i)
    }
  }
};

var nthUglyNumber = function(n) {
  const uglyNumbers = [1,2,3,4,5];
  if(n <= 5) return uglyNumbers[n];
  let i = 6;
  while(uglyNumbers.length < n) {
    if(uglyNumbers.indexOf(i/2) > -1) {
      uglyNumbers.push(i)
    } else if(uglyNumbers.indexOf(i/5) > -1) {
      uglyNumbers.push(i)
    } else if(uglyNumbers.indexOf(i/3) > -1) {
      uglyNumbers.push(i)
    }
    i++;
  }
  return uglyNumbers[uglyNumbers.length - 1];
};