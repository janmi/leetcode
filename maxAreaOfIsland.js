/*
* @Author: Administrator
* @Date:   2018-05-03 10:04:57
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-03 10:46:22
*/
/*
题：
给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。
 */

/*
  解题分析：
  1、当 i,j = 1, 并水平或者垂首方向都为1的时候可以视为岛屿
  2、满足条件一，并与岛屿相连的1可以视为岛屿的面积
  3、要求是需要返回最大的岛屿面积，则可以使用动态规划的方法去解题，子问题可以视为每一个岛屿，并且满足1、2条件
 */

var maxAreaOfIsland = function(grid) {
  var maxArea = 0
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, AreaOfIsland(grid, i, j))
      }  
    }  
  }
  return maxArea
};
// 对于是否是岛屿不需要过多的去考虑水平或垂直方向是否都是1，只要当前项为1，则假设他为岛屿，并且递归计算相邻项是否为1即可；累加并返回岛屿的面积。
// 通过 max 比较获得最大岛屿
var AreaOfIsland = function (grid, i, j) {
  if (i >= 0 && i < grid.length && j >= 0 && grid[0].length && grid[i][j] == 1) {
    // 重置当前项为0，是为了不在重复计算当前项的值
    grid[i][j] = 0
    // 递归计算当前项水平、垂直方向的项是否为1
    return 1 + AreaOfIsland(grid, (i + 1), j) + AreaOfIsland(grid, (i - 1), j) + AreaOfIsland(grid, i, (j + 1)) + AreaOfIsland(grid, i, (j - 1))
  }
  return 0
}

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]))