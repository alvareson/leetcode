class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
  const result: Array<ListNode | null> = new Array(k).fill(null)

  let length = 0
  let current = head
  while (current) {
    length++
    current = current.next
  }

  const partSize = Math.floor(length / k)
  let extraNodes = length % k

  current = head
  for (let i = 0; i < k; i++) {
    if (!current) break

    result[i] = current
    let currentPartSize = partSize + (extraNodes > 0 ? 1 : 0)
    extraNodes--

    for (let j = 1; j < currentPartSize; j++) {
      current = current!.next!
    }

    const nextPart = current!.next
    current!.next = null
    current = nextPart
  }

  return result
}

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

// helper function to convert a linked list to an array of values
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

const testCases = [
  {
    head: [1, 2, 3],
    k: 5
  },
  {
    head: [1,2,3,4,5,6,7,8,9,10],
    k: 3
  },
]

testCases.forEach(({ head, k }, index) => {
  const listHead = createLinkedList(head)
  const result = splitListToParts(listHead, k!)
  const formattedResult = result.map(part => linkedListToArray(part))
  console.log(`Test Case ${index + 1} Result:`, formattedResult)
})
