/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib1 = function(N) {
    // 递推
    let cache = []
    for (let i = 0; i <= N; i++) {
      if (i === 0 || i === 1) {
        cache[i] = i
      } else {
        cache[i] = cache[i - 1] + cache[i - 2]
      }
    }
    return cache[N]
};

var fib = function(N) {
  
  // if (N === 0) {
  //   return 0
  // }
  // if (N == 1) {
  //   return 1
  // }
  // return fib(N - 1) + fib(N - 2)
  let cache = []

  for (let i = 0; i <= N; i++) {
    if (i === 0 || i === 1) {
      cache[i] = i
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  return cache[N]
};
// @lc code=end

