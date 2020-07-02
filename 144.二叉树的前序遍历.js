/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal1 = function(root, arr = []) {
    // 递归
    if (root) {
      arr.push(root.val)
      preorderTraversal(root.left, arr)
      preorderTraversal(root.right, arr)
    }
    return arr
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // 迭代
  let result = []
  let curr = root
  let stack = []

  while(curr || stack.length > 0) {
    while(curr) {
      result.push(curr.val)
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    curr = curr.right
  }

  return result
};
// @lc code=end

