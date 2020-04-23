/**
 * @param {number[]} deck
 * @return {boolean}
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    function gcd(num1, num2) {
        return num2 === 0 ? num1 : gcd(num2, num1 % num2); 
    }
    
    if (deck.length === 1) return false;

    let timeMap = new Map();

    deck.forEach(num => {
        timeMap.set(num, timeMap.has(num) ? timeMap.get(num) + 1 : 1);
    });

    let total = [...timeMap.values()];
    
	let g = total[0];
	total.forEach(time => {
	    g = gcd(g, time);
	});

	return g >= 2;
};


// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
// console.log(hasGroupsSizeX([1,1,2,2,2,2]))
// console.log(hasGroupsSizeX([1]))
// console.log(hasGroupsSizeX([1,1]))
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3,3]))
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))

