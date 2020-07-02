/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length === 0) {
    return false
  }
  if (word.length === 0) {
    return true
  }
  let row = board.length
  let col = board[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let result = find(i, j, 0)
      if (result) {
        return true
      }
    }
  }
  return false
  
  function find(i, j, curr) {
    if (i < 0 || i >= row) {
      return false
    }
    if (j < 0 || j >= col) {
      return false
    }

    let letter = board[i][j]
    if (letter !== word[curr]) {
      return false
    }
    if (curr === word.length - 1) {
      return true
    }
    board[i][j] = null
    const ret = find(i + 1, j, curr + 1) ||
                find(i - 1, j, curr + 1) ||
                find(i, j + 1, curr + 1) ||
                find(i, j - 1, curr + 1);
    board[i][j] = letter
    return ret    
  }
};
// @lc code=end

