/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal1 = function(root, arr = []) {
  // 递归
  if (root) {
    inorderTraversal(root.left, arr)
    arr.push(root.val)
    inorderTraversal(root.right, arr)
  }
  return arr
};
var inorderTraversal = function(root) {
  // 迭代
  let result = []
  let stack = []
  let curr = root

  while(curr || stack.length > 0) {
    while(curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    result.push(curr.val)
    curr = curr.right
  }
  return result
};
// @lc code=end

