/**
 * @param {number} num
 * @return {boolean}
 */
/*
	丑数就是只包含2、3、5质因数的正整数
	可以只包含2
	可以只包含3
	可以只包含5
	可以其中任意两个的重复组合
	可以包含三个的重复组合
	那么其实不管怎么包含组合，丑数对以上组合的取模都应该是0,只要取模为0，就递归除以质因数，知道值为 0
	特殊情况0和1没有质因数
 */
var isUgly = function(num) {
	if(num<1) return false;
	while (num % 2 == 0) {
		num /= 2;
	}
	while (num % 3 == 0) {
		num /= 3;
	}
	while (num % 5 == 0) {
		num /= 5;
	}

	return num == 1;
};

console.log(isUgly(6))