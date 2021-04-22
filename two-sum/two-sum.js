/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 分析过程：
// 根据题目的描述，边界条件为 两项只和等于特定目标，则返回这两项的索引，所以可以使用组合算法（数组中的每一项都与其他项进行组合）。

var twoSum = function(nums, target) {
  var result = []
  // 取出第一项
  var cur = nums.shift()
  // 记录第一项索引
  var curIndex = 0
  // 创建一个函数，以方便递归
  var range = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      // 遍历数组，组合两项只和，如果等于特定目标，则返回两项的索引，跳出循环
      if ((cur + arr[i]) === target) {
        result = [curIndex, (curIndex + i + 1)]
        return
      }
    }
    // 剩余项长度大于等于2，则更新当前组合项、当前组合索引，并递归调用函数
    if (arr.length >= 2) {
      cur = arr.shift()
      curIndex = curIndex + 1
      range(arr)
    }
  }
  range(nums)
  return result
};

// 第二种解法，目标值减去当前项，得到另一组合项的值，通过 Array.indexOf()方法获取其索引，算法复杂度为 On

var twoSum = function(nums, target) {
 for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i]
    var j = nums.indexOf(complement) 
    if (j > -1 && j !== i) {
      return [i+1, j+1]
    }
 }
 return []
};

/*
一个left指针，一个right指针， 如果left + right 值 大于target 则 right左移动， 否则left右移。
 */
var twoSum = function(numbers, target) {
  const visited = {} // 记录出现的数字， 空间复杂度N
  for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      if (visited[target - element] !== void 0) {
          return [visited[target - element], index + 1]
      }
      visited[element] = index + 1;
  }
  return [];
};
