// 冒泡排序
function bubleSort (arr) {
	let len = arr.length;
	for (let outer = len; outer >= 2; outer--) {
		for (let j = 0; j <= outer - 1; j++) {
		 	if (arr[j] > arr[j + 1]) {
		 		[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
		 	}
		} 	
	}
	return arr;
}

console.log(bubleSort([1,4,3,5,10,7,3,9,5]))