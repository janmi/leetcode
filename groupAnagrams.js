/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const group = [];
	while (strs.length > 0) {
		const item = strs.splice(0, 1);
		for (let i = 0; i < strs.length; i++) {
			if ([...item[0]].sort().join('') === [...strs[i]].sort().join('')) {
				item.push(...strs.splice(i, 1));
				i--;
			}
		}
		group.push(item);
	}
	return group;
};
// 使用哈希表
var groupAnagrams = function(strs) {
	const group = {};
	while (strs.length > 0) {
		const item = strs.splice(0, 1);
		if (group[item[0].split('').sort().join('')]) {
			group[item[0].split('').sort().join('')].push(item[0]);
		} else {
			group[item[0].split('').sort().join('')] = [item[0]];
		}
	}
	return Object.values(group);
};

console.time('1:')
console.log(groupAnagrams(["eat", "eat", "eat", '']))
console.timeEnd('1:')