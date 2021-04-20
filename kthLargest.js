/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let total = 0;
  const helper = (root) => {
    if(!root) return;
    if(root.val >= k) {
      total++;
    }
    helper(root.left)
    helper(root.right)
  }
  helper(root)
  return total;
};