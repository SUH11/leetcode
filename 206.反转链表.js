/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let curr = head
  let prev = null

  while(curr !== null) {
    // 解构
    [curr.next, prev, curr] = [prev, curr, curr.next]
    // let next = curr.next
    // curr.next = prev
    // prev = curr
    // curr = next
  }

  return prev
};
// @lc code=end

