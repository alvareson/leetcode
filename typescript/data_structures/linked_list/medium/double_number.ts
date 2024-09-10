class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function doubleIt(head: ListNode | null): ListNode | null {
    if (!head) return null

    let number = 0
    let current = head
    while (current !== null) {
        number = number * 10 + current.val
        current = current.next as ListNode
    }

    number *= 2


    const str = number.toString()
    let newNode = new ListNode(parseInt(str[0]))
    let node = newNode
    for (let i = 1; i < str.length; i++) {
        node.next = new ListNode(parseInt(str[i]))
        node = node.next
    }

    return newNode
}

let node1 = new ListNode(0)
let node2 = new ListNode(5, node1)
let node3 = new ListNode(2, node2)

console.log(node3)

const answer = doubleIt(node3)

console.log(answer);

