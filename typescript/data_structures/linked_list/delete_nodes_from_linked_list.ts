class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
   
   
function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const numsSet = new Set(nums)
  let current = head
  let prev: ListNode | null = null
  while (current) {
    if (numsSet.has(current.val)) {
      if (prev) {
        prev.next = current.next
      } else {
        head = current.next
      }
    } else {
      prev = current
    }
    current = current.next
  }
  return head
}

const node5 = new ListNode(5, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)
console.log(modifiedList([1, 2, 3], node1))



/*
You are given an array of integers nums and the head of a linked list.
Return the head of the modified linked list after removing all nodes
from the linked list that have a value that exists in nums.

Example 1:
Input: nums = [1,2,3], head = [1,2,3,4,5]
Output: [4,5]
*/