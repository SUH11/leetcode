/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  // 解题思路一样
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i]

      if (num in obj) {
        return [obj[num], i]
      } else {
        obj[target - num] = i
      }
    }
};

var twoSum = function(nums, target) {
  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i]
    if (need in obj) {
      return [obj[need], i]
    } else {
      obj[nums[i]] = i
    }
  }
  return []
};
// @lc code=end

