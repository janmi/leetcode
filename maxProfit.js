/**
 * @param {number[]} prices
 * @return {number}
 */
/*
  解题分析：
  根据题目要求：必须是先买入后卖出，且买入的价格必须低于卖出的价格（否则利润为0）prices[j] > prices[i]
  则可以利润的计算公可以为 prices[j] - prices[i]
  通过 maxPrices = Math.max(maxPrices, price) 公式求最大利润值
  买入和卖出必须要按数组顺序操作，不可以跨间隔操作（在第 i 项操作买入了，只能在 i+1 项以后操作卖出）
 */

// var maxProfit = function(prices) {
//   var price = 0
//   var maxPrices = 0
//   for (var i = 0; i < prices.length; i++) {
//     for (var j = i + 1; j < prices.length; j++) {
//       price = prices[j] > prices[i] ? prices[j] - prices[i] : 0
//       maxPrices = Math.max(maxPrices, price)
//     }
//   }
//   return maxPrices
// };
/*
  Kadane算法：求最大子阵列，时间复杂度为 O(n)
  算法描述：

  遍历该数组， 在遍历过程中， 将遍历到的元素依次累加起来， 当累加结果小于或等于0时， 从下一个元素开始，重新开始累加。
  累加过程中， 要用一个变量(max_so_far)记录所获得过的最大值
  一次遍历之后， 变量 max_so_far 中存储的即为最大子片段的和值。
 */
var maxProfit = function (prices) {
  var maxCur = 0
  var maxSoFar = 0
  for (var i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, maxCur += prices[i] - prices[i-1])
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar
}

var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      profit = Math.max(profit, prices[i] - min)
    } else {
      min = Math.max(min, prices[i])
    }
  }

  return profit;
}


console.log(maxProfit([7, 1, 5, 3, 6, 4]))