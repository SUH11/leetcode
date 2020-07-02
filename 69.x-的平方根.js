/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) {
    return x
  }

  let left = 1
  let right = parseInt(x / 2)

  while (left < right) {
    let mid = parseInt((left + right) / 2)
    let res = mid * mid

    if (res <= x && (mid + 1) * (mid + 1) > x) {
      return mid
    }
    if (res < x) {
      left = mid + 1
    }
    if (res > x) {
      right = mid - 1
    }
  }

  return left
};
// @lc code=end

