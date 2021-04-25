/**
 * @param {number} n
 * @return {number}
 */
// 暴力递归, 容易栈溢出
var fib = function(n) {
	// 递归终止条件
  if(n <= 1) return n;
  // 下探递归
  return fib(n-1) + fib(n-2);
};
// dp 解法
var fib = function(n) {
  let n1 = 0, n2 = 1, sum;
  for(let i = 0; i < n; i++){
      sum = (n1 + n2) % 1000000007;
      n1 = n2;
      n2 = sum;
  }
  return n1;
};

// 遍历， 比 dp 块点
var fib = function(n) {
  let res = [0, 1];
  for(let i = 1; i <= 100; i++){
    if(res[n] >= 0) {
      return res[n];
    }
    res.push((res[i] + res[i - 1]) % 1000000007)
  }
};