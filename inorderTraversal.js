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
 * @return {number[]}
 */
// 二叉树的中序遍历： 左-中-右
var inorderTraversal = function(root) {
  const statck = [];
  const inOrder = (root) => {
      if (root) {
          if (root.left) {
              inOrder(root.left);
          }
          statck.push(root.val);
          if (root.right) {
              inOrder(root.right);
          }
      }
  }
  inOrder(root);
  return statck;
};