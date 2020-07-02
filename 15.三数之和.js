/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  if (nums === null || nums.length < 3) {
    return result
  }
  nums.sort((a, b) => a - b)
  let len = nums.length
  for (let i = 0; i < len - 2; i++) {
    let curr = nums[i]
    if (curr > 0) {
      break
    }
    if (i > 0 && nums[i] === nums[i -1]) { // 相邻重复
      continue
    }
    let L = i + 1
    let R = len - 1
    while (L < R) {
      let sum = curr + nums[L] + nums[R]
      if (sum === 0) {
        result.push([curr, nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L ++;
        while (L < R && nums[R] === nums[R - 1]) R --;
        L ++;
        R --;
      } else if (sum < 0) {
        L ++;
      } else if (sum > 0) {
        R --;
      }
    }
  }
  return result;
}
// @lc code=end

