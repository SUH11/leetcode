/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  // 用来记住整个链表的头节点位置
    let res = new ListNode(0)
    res.next = head
    // 找到需要反转的位置
    let pre = res
    for(let i = 1; i < m; ++i){
        pre = pre.next
    }
    // 将head指向要反转的链表部分的头部
    head = pre.next
    for(let i = m; i < n; ++i){
        let nxt = head.next
        // nxt 节点要被放到反转部分的头部，所以将head的next指向它的下下个节点
        head.next = head.next.next
        // 将nxt放到头部，pre.next指向的是反转部分的头部节点
        nxt.next = pre.next
        // 重新将pre指向反转部分的头部
        pre.next = nxt
    }
    return res.next
};
// @lc code=end

