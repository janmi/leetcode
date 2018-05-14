/*
* @Author: Administrator
* @Date:   2018-05-11 11:34:33
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-14 18:00:47
*/
var exist = function(board, word) {
  let searchList = JSON.parse(JSON.stringify(board))
  let curStr = ''
  let targetIndex = 0
  let ret = false
  if(word == null || word.length ===0)  
    return true 
  if(board == null || board.length === 0 || board[0].length === 0)  
    return false

  let findString = function (searchList, i, j) {
    let target = word.substr(targetIndex, 1)
    if (curStr === word) {
      return true
    }
    if (i >= 0 && i < searchList.length && j >= 0 && j < searchList[i].length && searchList[i][j] != 1 && searchList[i][j] === target) {
      // 当前项等于验证的字符串，赋值为1，防止再次验证
      searchList[i][j] = 1
      curStr += target
      targetIndex++
      ret = findString(searchList, i, j+1) || findString(searchList, i, j-1) || findString(searchList, i+1, j) || findString(searchList, i-1, j)
      // 搜索了当前项上下左右四个方向，不符合结果，排除当前项，改搜索其他三个方向的项
      if (!ret) {
        // 目标索引减一
        targetIndex = targetIndex - 1
        // 当前项符合，但其4个子项（或子项的子项不符合）不符合，则移除当前项，从其他三个方向重新查找
        curStr = curStr.substr(0, curStr.length - 1)
        // 还原当前项为初始值，方便其他项查找
        searchList[i][j] = board[i][j]
      }
      return ret
    } else {
      return false
    }
  }
  for (var i = 0; i < searchList.length; i++) {
    for (var j = 0; j < searchList[i].length; j++) {
      if (findString(searchList, i, j)) {
        return true
      } else {
        curStr = ''
        targetIndex = 0
        searchList = JSON.parse(JSON.stringify(board))
      }
    }  
  }
  return ret
};

const board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]

// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ] 
//[['a', 'b'], ['c', 'd']] abcd
//[["C","A","A"],["A","A","A"],["B","C","D"]] AAB
//[["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]] ABCESEEEFS
console.time('exist:')
console.log(exist(board, "ABCESEEEFS"))
console.timeEnd('exist:')