function selectSort (arr) {
	let len = arr.length
	for (let i = 0; i < len - 1; i++) {
	 	for (let j = i; j < len; j++) {
	 		if (arr[j] < arr[i]) {
	 			[arr[i], arr[j]] = [arr[j], arr[i]];
	 		}
	 	}
	}
	return arr 
}


console.log(selectSort([1,4,3,5,10,7,3,9,5,1]))