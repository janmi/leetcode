/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
 }
var serialize = function(root) {
    const str = '';
    const helper = (root, str) => {
      // 递归终止条件
      if(!root) {
        str += 'none,' 
      } else {
        str += root.val + ',';
        // 下探递归
        str = helper(root.left, str);
        str = helper(root.right, str);
      }
      return str;
    }
    // 处理当前逻辑
    return helper(root, '');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');
    console.log(data);

    const helper = (data) => {
      // 递归终止条件
      if(data[0] === 'none') {
        data.shift();
        return null;
      }
      const tree = new TreeNode(data.shift())
      // 下探递归
      tree.left = helper(data);
      tree.right = helper(data);
      return tree;
    };
    // 执行当前递归逻辑
    return helper(data)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */