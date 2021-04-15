/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let index = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num !== 0) {
            nums[index++] = num;
        }
    }
    for(let i = index; i < nums.length; i++) {
        nums[index++] = 0;
    }

	return nums;
};

var moveZeroes = function(nums) {
   let len = nums.length;
   let i = 0;
   while (len > 0) {
       if (nums[i] === 0) {
           nums.splice(i, 1);
           nums[nums.length] = 0;
       } else {
           i++;
       }
       len--;
   }
   return nums;
}

console.log(moveZeroes([1,0,0,0,0,0]))