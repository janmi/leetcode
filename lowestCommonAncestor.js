/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const arr = [p.val, q.val];
    const helper = (root) => {
      //递归终止条件
      if (!root) return false;
      // 下探递归
      let lRes = helper(root.left);
      let rRes = helper(root.right);
       //递归终止条件
      if ((lRes && rRes) || (arr.indexOf(root.val) > -1 && (lRes || rRes))) {
        return root;
      }
      // 返回当前节点判断结果
      return lRes || rRes || arr.indexOf(root.val) > -1;
    }
    // 处理当前逻辑
    return helper(root);
};