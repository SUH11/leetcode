/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root, deep = 0) {
  if (root === null) {
    return 0
  }  
  let leftDeep = maxDepth(root.left)
  let rightDeep = maxDepth(root.right)
  
  return Math.max(leftDeep, rightDeep) + 1
};
// @lc code=end

