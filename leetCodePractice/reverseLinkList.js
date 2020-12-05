/*
 * @Author: your name
 * @Date: 2020-11-05 10:42:26
 * @LastEditTime: 2020-12-05 12:53:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\leetCodePractice\reverseLinkList.js
 */
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

function ListNode(val) {
    this.val = val
    this.next = null
}

function reverseListA (head) {
    let cur = head
    let pre = null
    let next = null
    while (cur != null) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
}

function reverseListB(head) {
    let temp = head
    let stash = []

    while (temp != null) {
      stash.push(temp.val)
      temp = temp.next
    }
    
    temp = head
    let i = 0
    
    stash.reverse()

    while (temp != null) {
      temp.val = stash[i++]
      temp = temp.next
    }
    return head

}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)

node1.next = node2
// node2.next = node3
// node3.next = node4



console.log(node1)

const result  =  reverseListB(node1)
console.log(result)

