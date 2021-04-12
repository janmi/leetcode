function quickSort (arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let active = arr.splice(0,1);
	let lefts = [];
	let rights = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < active) {
			lefts.push(arr[i]);
		} else {
			rights.push(arr[i]);
		}
	}
	return quickSort(lefts).concat(active, quickSort(rights));
}

console.log(quickSort([1,4,3,5,10,7,3,9,5]))