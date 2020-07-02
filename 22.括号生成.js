/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []
  getAll(0, result)
  return result
  function getAll(pos, result, temp = []) {
    if (pos === 2*n) {
      if (isValid(temp)) {
        result.push(temp.join(''))
      }
    } else {
      temp[pos] = '('
      getAll(pos + 1, result, temp)
      temp[pos] = ')'
      getAll(pos + 1, result, temp)
    }
  }
  function isValid(arr) {
    let stack = []
    let curr = 0
    while (curr < arr.length) {
      if (arr[curr] === '(') {
        stack.push(arr[curr])
      } else {
        if (stack.pop() !== '(') {
          return false
        }
      }
      curr ++
    }
    return stack.length === 0
  }
};
// @lc code=end

