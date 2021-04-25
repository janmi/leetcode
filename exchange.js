/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 分成奇偶左右两个数组，最后合并返回
var exchange = function(nums) {
  let odd = [];
  let even = [];
  for(let i = 0;i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      even.push(nums[i])
    } else {
      odd.push(nums[i])
    }
  }
  return odd.concat(even);
};

// 使用指针，减少使用空间
var exchange = function(nums) {
  let left = 0；
  let right = nums.length - 1;
  while (left !== right) {
    if (nums[left] % 2 === 0 && nums[right] % 2 !== 0) {
      let cache = nums[right];
      nums[right] = nums[left];
      nums[left] = cache;
    }
    left++;
    right--;
  }
  return nums;
};