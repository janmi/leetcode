/**
 * @param {number} num
 * @return {string[]}
 */
 /*
	边界条件
	1、小时灯的组合数不可以超过 11小时
	2、分灯组合数不可以超过 59 分钟
	3、5颗星的时候总分钟数最小为1小时31分，分钟数不可以为62、61、60
	4、四颗星的时候 总分钟数不可以为 60
	5、6、7、8颗星 总分钟数不可以为 63、62、61、60
	解体思路：将1、2、4、8小时转化为分钟数，与分钟数组合成一个数组；根据传入的 num 递归组合数组，组合成的数组包含了所有的组合。
	需要再根据以上边界条件进行筛选符合的组合
 */
var readBinaryWatch = function(num) {
    const minute = [60, 120, 240, 480, 1, 2, 4, 8, 16, 32] // 将小时转化为分，再进行组合计算
    const combination = []
    const time = new Date('Sun Jul 22 2018 00:00:00').getTime()
    // 获取一天23：59时间毫秒，使用这个时间加上组合的时间。可以通过 getHours、getMinutes方法获取到组合时间到时、分
    const twelve = 12 * 60 * 60 * 1000 - 60 * 1000
    var result = []
    if (num === 0) return ['0:00']
    if (num >= 9) return result
    // 组合递归运算
	  var range = function(r, _arr) {
	    if (r.length == num) {
	      combination.push(r)
	    } else {
	      let l = r.length;
	      for (var i = 0, len = _arr.length - num + l; i <= len; i++) {
	        range(r.concat(_arr[i]), _arr.slice(i + 1))
	      }
	    }
	  }
	  range([], minute)

	  for (var i = 0; i < combination.length; i++) {
	  	// 将当前组合转化成秒数
	  	let itemCount = combination[i].reduce((prev, curr) => prev + curr ) * 60 * 1000
	  	// 转化为时间对象，方便获取时、分
	  	let newTime = new Date(time + itemCount)
	  	let hours = String(newTime.getHours()) // 获取时
	  	let minute = String(newTime.getMinutes()) // 获取分
	  	if (itemCount > twelve) {
	  	} else if (num === 4 && minute === '0') {
	  	} else if (num === 5 && (minute === '0'|| minute === '1' || minute === '2')) {
	  	} else if (num > 5 && (minute === '0'|| minute === '1' || minute === '2' || minute === '3')) {
	  	} else {
	  		// 补0操作
		  	minute = minute.length === 1 ? '0' + minute : minute
		  	result.push(hours + ':' + minute)
	  	}
	  }
	return result
};

console.dir(readBinaryWatch(4).length)




