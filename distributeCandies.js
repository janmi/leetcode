/**
 * @param {number[]} candies
 * @return {number}
 */
/*
条件：兄妹平分糖果，并且妹妹的种类是最多的
已知条件：糖果数量为偶数，兄妹拥有的数量是一致的,
当种类的数量是糖果数量的一半时，那么妹妹可以获得最多的糖果种类就是所有的糖果种类。
 */
var distributeCandies = function(candies) {
	let sister = new Set(candies);
	if (sister.size >= Math.round(candies.length / 2)) {
		return ((sister.size / 2) + (candies.length - sister.size) / 2)
	} else {
        return sister.size;
    }
};

console.log(distributeCandies([1,1,2,2,3,3])) // 3
console.log(distributeCandies([1,1,2,3])) // 2
console.log(distributeCandies([1,1,1,1,1,2,3,4,1,1])) // 4
console.log(distributeCandies([1,1,1,1,1,1,1,1,1,2])) // 2
console.log(distributeCandies([3,1,0,4])) // 2
console.log(distributeCandies([505,8,951,606,475,401,451,903,618,772,760,475,310,417,728,972,646,794,648,315,353,698,55,88,503,798,297,139,879,99,917,38,554,747,561,175,956,373,672,941,267,680,89,902,127,428,545,914,586,349,339,152,185,340,220,547,648,364,939,641,212,422,621,512,338,826,887,813,125,955,4,874,804,868,231,939,114,237,298,606,199,965,972,141,676,90,369,289,628,12,588,236,254,370,920,298,566,888,316,173])) // 50
