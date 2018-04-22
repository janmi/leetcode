var maxProfit = function (prices) {
  var max = 0
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1] 
    }
  }
  return max
}


console.log(maxProfit([9,2,8,4,5]))