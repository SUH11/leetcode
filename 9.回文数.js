/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (!x) {
    return true
  }
  // 负数直接返回
  if (x < 0) {
    return false
  }
  // 转字符串遍历 双指针
  x = x.toString()
  let left = 0
  let right = x.length - 1
  while (left <= right) {
    if (x[left] !== x[right]) {
      return false
    }
    left++
    right--
  }
  return true
};
// @lc code=end

