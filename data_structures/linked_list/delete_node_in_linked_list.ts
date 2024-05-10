// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

function deleteNode(node: ListNode | null): void {
    if (node === null || node.next === null) {
        return
    }
    node.val = node.next!.val
    node.next = node.next!.next
}

// let node1 = new ListNode(9)
// let node2 = new ListNode(1, node1)
// let node3 = new ListNode(5, node2)
// let node4 = new ListNode(4, node3)

// deleteNode(node3)

// console.log(node4)
