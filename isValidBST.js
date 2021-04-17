/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const validBST = (root, lower, upper) => {
    // 递归终止条件
    if (root === null) return true;
    if (root.val <= lower || root.val >= upper) return false;

    return validBST(root.left, lower, root.val) && validBST(root.right, root.val, upper);
  }
  // 执行当前层逻辑
  return validBST(root, -Infinity, Infinity);
};