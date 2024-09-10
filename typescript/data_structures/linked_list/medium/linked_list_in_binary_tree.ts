class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (!root) return false

  const dfs = (listNode: ListNode | null, treeNode: TreeNode | null): boolean => {
      if (!listNode) return true
      if (!treeNode) return false

      if (listNode.val === treeNode.val) {
          return dfs(listNode.next, treeNode.left) || dfs(listNode.next, treeNode.right)
      }

      return false
  }

  return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
}


/*
Given a binary tree root and a linked list with head as the first node. 
Return True if all the elements in the linked list starting from the head
correspond to some downward path connected in the binary tree otherwise return False.
In this context downward path means a path that starts at some node and goes downwards.

Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
Explanation: Nodes in blue form a subpath in the binary Tree.
*/


function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null
  const head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}

// create binary tree from array
function createBinaryTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null
  const root = new TreeNode(arr[0])
  const queue: (TreeNode | null)[] = [root]
  let i = 1

  while (i < arr.length) {
    const current = queue.shift()
    if (current) {
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i] as number)
        queue.push(current.left)
      }
      i++
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i] as number)
        queue.push(current.right)
      }
      i++
    }
  }
  return root
}

const testCases = [
  {
    head: [4, 2, 8],
    root: [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3],
    expected: true,
  },
  {
    head: [1, 4, 2, 6, 7, 9],
    root: [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3],
    expected: true,
  },
]

testCases.forEach(({ head, root, expected }, index) => {
  const listHead = createLinkedList(head)
  const treeRoot = createBinaryTree(root)
  const result = isSubPath(listHead, treeRoot)
  console.log(`Test Case ${index + 1}:`, result === expected ? 'Passed' : 'Failed', `| Output: ${result}, Expected: ${expected}`)
})
