/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function(head) {
  let cache = {}
  let curr = head
  while(curr) {
    if (cache.hasOwnProperty(curr.val)) {
      return true
    } 
    cache[val] = 1
  }
  return false
}
var hasCycle2 = function(head) {

  // -----------1---------------
  // let count = 0

  // while(head) {
  //     count ++
  //     if (count > 10000) {
  //         return true
  //     }
  //     head = head.next
  // }
  // return false
  // ------------1--------------

  // -----------2---------------
  // let cache = new Set() // O(1)  空间复杂度：O(n)

  // while(head) {
  //     if (cache.has(head)) {
  //         return true
  //     }
  //     cache.add(head)
  //     head = head.next
  // }
  // return false
  // -----------2---------------

  // ------------3------快慢指针--------
  let fast = head
  let slow = head
  while(fast && fast.next) {
      fast = fast.next.next
      slow = slow.next

      if (fast === slow) {
          return true
      }
  }
  return false
  // ------------3--------------


};