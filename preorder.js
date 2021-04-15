/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// N 叉树的前序遍历: 中-循环遍历子节点-递归子节点（中-左）
var preorder = function(root) {
  const statck = [];
  const preorders = (root) => {
    if (root) {
      statck.push(root.val) 
      if(root.children) {
        for(let i = 0; i < root.children.length; i++) {
          preorders(root.children[i]);
        }
      }
    }
  }
  preorders(root);
  return statck;
};