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
// 前序遍历： 中-左-右
var preorderTraversal = function(root) {
  const statck = [];
  const preorder = (root) => {
    if (root) {
      statck.push(root.val);
      if(root.left) {
          preorder(root.left);
      }
      if(root.right) {
      preorder(root.right); 
      }
    }
  }
  preorder(root);
  return statck;
};