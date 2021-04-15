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
// 后序遍历: 左-右-中
var postorderTraversal = function(root) {
  const statck = [];
  const postorder = (root) => {
    if (root) {
      if(root.left) {
        postorder(root.left)
      }
      if(root.right) {
        postorder(root.right)
      }
      statck.push(root.val);
    }
  }
  postorder(root);
  return statck;
};