/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = ''
  let len = s.length
  let dp = Array.from(new Array(len), () => new Array().fill(0))
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && ((j - i < 2) || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.substr(i, j - i + 1)
      }
    }
  }
  return result
};
/*
动态规划
  确定dp[i][j]是否是回文数，只需要dp[i+1][j-1]是回文数并且s[i] == s[j]即可。
  但是长度为0或1的回文传需要特殊处理，即j-i < 2;
  因为知道dp[i]需要先知道dp[i+1],所以i需要从大到小开始遍历
  因为知道dp[j]需要先知道dp[j-1],所以j需要从小到大开始遍历
  即: dp[i][j] = s[i] == s[j] && ( dp[i+1][j-1] || j - i < 2)
*/
// @lc code=end

