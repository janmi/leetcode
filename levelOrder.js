/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
// N 叉树层级遍历：需要记住 level，然后将记住的 level 传入递归函数
 
var levelOrder = function(root) {
    if(!root) return []
    const statck = [];
    const dep = (root, d) => {
      if(d >= statck.length) {
        statck.push([root.val])
      } else {
        statck[d].push(root.val)
      }
      for(const i of root.children) {
        dep(i, d + 1)
      }
    }
  dep(root, 0)
  return statck;
};