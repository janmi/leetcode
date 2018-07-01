/**

You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

Example:

Input: 4
Output: false 
Explanation: If there are 4 stones in the heap, then you will never win the game;
             No matter 1, 2, or 3 stones you remove, the last stone will always be 
             removed by your friend.

*/

/**
	第一次解体分析：根据题意 “
Both of you are very clever and have optimal strategies for the game. ”
两个人为了保证可以拿到最后一个宝石，会采取最佳的策略，一次拿尽量多的宝石（最多三颗）。则两者之间会在最大3个范围中拿取宝石；满足以下条件的数字，我即可赢得游戏
1、求余等于零、可以除尽3（返回结果是奇数）
2、除于3返回结果第一位是偶数，并且结果大于第一位偶数
*/

var canWinNim = function (n) {
	if (n <= 3) return true
	if (n % 3 === 0 && !isOddEven(n/3)) {
		return true
	}
	var relust = n / 3
	if (isOddEven(parseInt(relust)) && relust > parseInt(relust)) {
		return true
	}
	return false
}

var isOddEven = function (n) {
	return n % 2 === 0
}

/**
	第二次解体分析：
	经过第一次的测试，发现5、和 6 同样可以赢得游戏。即并不是按照最佳策略。只要满足以下条件，我就不能赢得游戏
	1、对4求余等于 0 

*/
var canWinNim = function (n) {
	if (n <= 3) return true
    return !(n % 4 === 0)
}
console.log(canWinNim(106))