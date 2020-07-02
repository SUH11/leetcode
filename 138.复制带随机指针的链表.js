/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) {
    return head
  }
  let result = {}
  let curr = result
  while (head) {
    curr.val = head.val
    curr.next = head.next
    curr.random = head.random
    head = head.next
    curr = curr.next
  }
  return result
};
// @lc code=end

