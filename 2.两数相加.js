/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let ele = {}
  let curr = ele
  while (l1 || l2) {
    let val = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (curr.val || 0)
    let ex = parseInt(val / 10)

    l1 = l1 && l1.next
    l2 = l2 && l2.next

    curr.val = val % 10

    if (ex || l1 || l2) {
      curr.next = {
        val: parseInt(val / 10) // 遇10进1
      }
    }

    curr = curr.next
  }
  return ele
};
// @lc code=end

