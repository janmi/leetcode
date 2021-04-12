/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
	原地操作数组，不再新建一个数组来存储排序号的数组
 */
var merge = function(nums1, m, nums2, n) {
  // 设置一个指针，指针初始化指向nums1的末尾（根据#62，应该是index为 m+n-1 的位置，因为nums1的长度有可能更长）
  // 然后不断左移指针更新元素
	let current = m + n - 1;

	while(current >= 0 ) {
		if (n === 0) return nums1;

		if (m < 1) {
			nums1[current--] = nums2[--n];
			continue;
		};

		if (n < 1) {
			nums1[current--] = nums1[--m];
			continue;
		}

		if (nums1[m - 1] > nums2[n-1]) {
			nums1[current--] = nums1[--m]
		} else {
			nums1[current--] = nums2[--n]
		}
	}	 

	// return nums1;
};

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};


console.log(merge([1,2,3,4,5,6], 5, [1,2,3,4], 4))