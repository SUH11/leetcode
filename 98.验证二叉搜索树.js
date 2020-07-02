/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let pre = null
  let curr = root
  let stack = []

  while(curr || stack.length > 0) {
    while(curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    if (pre && pre.val >= curr.val) {
      return false
    }
    pre = curr
    curr = curr.right
  }
  return true
};
// @lc code=end

