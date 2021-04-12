/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				nums.splice(j, 1)
				j--
			}
		}
	}
	return nums.length
};

var removeDuplicates = function(S) {
  S = Array.from(S)
  for(let i = 0; i < S.length; i++) {
    if(S[i] === S[i+1]) {
      S.splice(i, 2);
      i=-1;
    }
  }
  return S.join('');
};
console.log(removeDuplicates([-1,0,0,0,0,3,3]))