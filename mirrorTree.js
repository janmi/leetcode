/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  const helper = (root) => {
    let mid = null;
    // 递归终止条件
    if (root) {
      mid = root.right;
      root.right = root.left;
      root.left = mid;
      // 下探递归
      helper(root.right)
      helper(root.left)
    }
  }
  // 执行当前层
  helper(root)
  return root;
};
