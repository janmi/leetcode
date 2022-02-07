/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let res = []
  let left = 1;
  let right = 2;
  let item = [left, right];
  let sum = left + right;
  while(left <= Math.round(target/2)) {
    if(sum === target) {
      res.push(item);
      left++;
      right++;
      item.push(right)
    }
    if(sum > target) {
      sum = sum - left
      left++;
      item.shift()
    }
    if(sum < target) {
      right++;
      sum = sum + right
      item.push(right)
    }
  } 
  return res
};

console.log(findContinuousSequence(9));