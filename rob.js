/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
// 	let oddSum = 0;
// 	let evenSum = 0;
// 	for (var i = 0; i < nums.length; i++) {
// 		if (nums[2 * i + 1]) {
// 			oddSum += nums[2 * i + 1];
// 		}
// 		if (nums[2 * i]) {
// 			evenSum += nums[2 * i];
// 		}
// 	}

// 	return Math.max(oddSum, evenSum)
// };

var rob = function(nums) {
	// Tag: DP
  const dp = [];
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < nums.length + 2; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
    console.log(i)
    console.log(dp)
  }

  return dp[nums.length + 1];
}


// console.log(rob([1,2,3,1]))
// console.log(rob([9,1,1,9]))
console.log(rob([2,7,9,3,1]))