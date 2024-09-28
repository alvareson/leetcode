/*
Design your implementation of the circular double-ended queue (deque).

Implement the MyCircularDeque class:

MyCircularDeque(int k) Initializes the deque with a maximum size of k.
boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
boolean isEmpty() Returns true if the deque is empty, or false otherwise.
boolean isFull() Returns true if the deque is full, or false otherwise.
 

Example :
Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]

Explanation
MyCircularDeque myCircularDeque = new MyCircularDeque(3)

myCircularDeque.insertLast(1)  // return true
myCircularDeque.insertLast(2)  // return true
myCircularDeque.insertFront(3) // return true
myCircularDeque.insertFront(4) // return false, the queue is full
myCircularDeque.getRear()      // return 2
myCircularDeque.isFull()       // return true
myCircularDeque.deleteLast()   // return true
myCircularDeque.insertFront(4) // return true
myCircularDeque.getFront()     // return 4
*/

class MyCircularDeque {
  private deque: number[]
  private capacity: number
  private front: number
  private rear: number
  private size: number

  constructor(k: number) {
    this.capacity = k
    this.deque = new Array(k)
    this.front = 0
    this.rear = 0
    this.size = 0
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false
    this.front = (this.front - 1 + this.capacity) % this.capacity
    this.deque[this.front] = value
    this.size++
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false
    this.deque[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    this.size++
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false
    this.front = (this.front + 1) % this.capacity
    this.size--
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false
    this.rear = (this.rear - 1 + this.capacity) % this.capacity
    this.size--
    return true
  }

  getFront(): number {
    if (this.isEmpty()) return -1
    return this.deque[this.front]
  }

  getRear(): number {
    if (this.isEmpty()) return -1
    return this.deque[(this.rear - 1 + this.capacity) % this.capacity]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  isFull(): boolean {
    return this.size === this.capacity
  }
}