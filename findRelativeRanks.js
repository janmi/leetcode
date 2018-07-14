/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let sortNums = Array.from(nums)
  sortNums.sort((a, b) => {
    return b - a
  })
  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  for (var i = 0; i < sortNums.length; i++) {
    let curindex = nums.indexOf(sortNums[i])
    if (i <= 2) {
      nums[curindex] = medals[i]
    } else {
      nums[curindex] = (i + 1) + ''
    }
  }
  return nums
};

console.log(findRelativeRanks([10,3,8,9,4]))