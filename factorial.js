function factorial(num) {
	if (num === 1) {
		return 1
	} else {
		return num * factorial(num - 1) // num * (num - 1) * (num - 2) * (num - 3)
	}
}

console.log(factorial(5));