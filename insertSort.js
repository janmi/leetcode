function insertSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				[arr[j], arr[j-1]] = [arr[j-1], arr[j]];
			} else {
				break;
			}
		}
	}
	return arr;
}

console.log(insertSort([1,4,3,5,10,7,3,9,5,1]))