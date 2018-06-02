/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
  let isSum = false
  if (!root) return isSum
  if (!root.left && !root.right) {
    return root.val == sum
  }
  const recursiveTree = function (head, pathSum) {
    pathSum += head.val
    if (!head.left && !head.right) {
      return pathSum == sum
    }
    isSum = (head.left != null && recursiveTree(head.left, pathSum)) || (head.right != null && recursiveTree(head.right, pathSum))
    return isSum
  }
  
  return recursiveTree(root, 0)
};

const tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: null
}
const tree2 = {
  val: 10,
  left: null,
  right: null
}
console.log(hasPathSum(tree2, 11))