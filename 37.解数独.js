/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') {
          continue
        }
        for (let k = 1; k <= 9; k++) {
          if (isValid(board, i, j, k)) {
            board[i][j] = k.toString()
            if (solveSudoku(board)) {
              return true
            }
            // 回溯
            board[i][j] = '.'
          } 
        }
        return false
      }
    }
    return true
};
function isValid(board, row, col, k) {
  // row col
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == k || board[i][col] == k) {
      return false
    }
  }
  // 小方格
  let x = parseInt(row / 3)
  let y = parseInt(col / 3)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + x * 3][j + y * 3] == k) {
        return false
      }
    }
  }
  return true
}
// @lc code=end

