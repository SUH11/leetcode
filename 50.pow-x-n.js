/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // 特殊情况
  if (n === 0) {
    return 1
  }

  let result = 1
  let pow = Math.abs(n) // 负数问题
  while(n) {
    if (pow % 2 === 1) {
      result *= x
    }
    if (pow === 1) {
      if (n < 0) {
        return 1 / result
      }
      return result
    }
    x *= x
    pow = parseInt(pow / 2)
  }
};
// @lc code=end

