/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let x = 0;
	for (var i = 0; i < operations.length; i++) {
		if (operations[i].indexOf('++') > -1) {
			x = x + 1
		} else {
			x = x - 1
		}
	}

	return x
};