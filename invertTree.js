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

var tree = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null }
  },
  right: {
    val: 7,
    left: { val: 6, left: null, right: null },
    right: { val: 9, left: null, right: null }
  }
}
/*

  默认有序二叉树的右子树是大于左子树的，翻转二叉树既左子树大于右子树
  如果树比较长建议使用 stack
 */
var invertTree = function(root) {
	if (root) {
		[root.left, root.right] = [root.right, root.left]
		invertTree(root.left);
		invertTree(root.right);
	}

	return root
};

console.log(invertTree(tree))