/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
	解题分析：
	什么是众数：众数（mode）指一组数据中出现次数最多的数据值。例如{2,3,3,3}中，出现最多的是3，因此众数是3，众数可能是一个数，但也可能是多个数。
	根据题意，众数需要满足的条件为：出现的次数大于 n/2（n为数组的个数）
	则中间的 n/2 个元素为众数

 */
var majorityElement = function(nums) {
    nums.sort((a, b) => {
    	return a - b
    })
    let mode = Math.floor(nums.length / 2)
    return nums[mode]
};


console.log(majorityElement([10,9,9]))