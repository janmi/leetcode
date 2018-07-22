/**
 * @param {number} num
 * @return {string[]}
 */
 /*
	边界条件
	1、小时灯的组合数不可以超过 11小时
	2、分灯组合数不可以超过 59
	3、5颗星的时候总分数最小为1小时31分，不可以为62、61、60
	4、四颗星的时候 总分数不可以为 60
	5、6颗星 63、62、61、60
	6、7颗星 63、62、61、60
	7、8颗星 63、62、61、60
 */
var readBinaryWatch = function(num) {
    const minute = [60, 120, 240, 480, 1, 2, 4, 8, 16, 32] // 将小时转化为分，再进行组合计算
    const combination = []
    const time = new Date('Sun Jul 22 2018 00:00:00').getTime()
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
	  	let itemCount = combination[i].reduce((prev, curr) => prev + curr ) * 60 * 1000// 转化成秒数	  	
	  	let newTime = new Date(time + itemCount)
	  	let hours = String(newTime.getHours())
	  	let minute = String(newTime.getMinutes())
	  	if (itemCount > twelve) {
	  	} else if (num === 4 && minute === '0') {
	  	} else if (num === 5 && (minute === '0'|| minute === '1' || minute === '2')) {
	  	} else if (num > 5 && (minute === '0'|| minute === '1' || minute === '2' || minute === '3')) {
	  	} else {
		  	minute = minute.length === 1 ? '0' + minute : minute
		  	result.push(hours + ':' + minute)
	  	}
	  }
	return result
};

console.dir(readBinaryWatch(4).length)




