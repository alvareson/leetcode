class MinHeap {
  private heap: {node: number, logProb: number}[]

  constructor() {
      this.heap = []
  }

  push(item: {node: number, logProb: number}) {
      this.heap.push(item)
      this.bubbleUp(this.heap.length - 1)
  }

  pop(): {node: number, logProb: number} | undefined {
      if (this.heap.length === 0) return undefined
      if (this.heap.length === 1) return this.heap.pop()
      const top = this.heap[0]
      this.heap[0] = this.heap.pop()!
      this.bubbleDown(0)
      return top
  }

  isEmpty(): boolean {
      return this.heap.length === 0
  }

  private bubbleUp(index: number) {
      const element = this.heap[index];
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2)
          const parent = this.heap[parentIndex]
          if (element.logProb >= parent.logProb) break
          this.heap[index] = parent
          index = parentIndex
      }
      this.heap[index] = element
  }

  private bubbleDown(index: number) {
      const length = this.heap.length
      const element = this.heap[index]

      while (true) {
          let leftChildIndex = 2 * index + 1
          let rightChildIndex = 2 * index + 2
          let leftChild, rightChild
          let swapIndex = -1

          if (leftChildIndex < length) {
              leftChild = this.heap[leftChildIndex]
              if (leftChild.logProb < element.logProb) {
                  swapIndex = leftChildIndex
              }
          }

          if (rightChildIndex < length) {
              rightChild = this.heap[rightChildIndex]
              if (
                  (swapIndex === -1 && rightChild.logProb < element.logProb) ||
                  (swapIndex !== -1 && rightChild.logProb < leftChild!.logProb)
              ) {
                  swapIndex = rightChildIndex
              }
          }

          if (swapIndex === -1) break
          this.heap[index] = this.heap[swapIndex]
          index = swapIndex
      }
      this.heap[index] = element
  }
}

function maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {
  // step 1 - build the graph using log probabilities
  const graph: Map<number, {node: number, logProb: number}[]> = new Map()
  for (let i = 0; i < edges.length; i++) {
      const [a, b] = edges[i]
      const logProb = -Math.log(succProb[i]) // negate the log probability
      
      if (!graph.has(a)) graph.set(a, [])
      if (!graph.has(b)) graph.set(b, [])
      
      graph.get(a)!.push({node: b, logProb: logProb})
      graph.get(b)!.push({node: a, logProb: logProb})
  }
  
  // step 2 - Dijkstra's algorithm with a min-heap priority queue
  const minHeap = new MinHeap();
  minHeap.push({node: start_node, logProb: 0})
  const minLogProb: number[] = new Array(n).fill(Infinity)
  minLogProb[start_node] = 0
  
  while (!minHeap.isEmpty()) {
      const {node, logProb} = minHeap.pop()!
      
      if (node === end_node) {
          return Math.exp(-logProb) // convert back to probability
      }
      
      for (const neighbor of graph.get(node) || []) {
          const newLogProb = logProb + neighbor.logProb
          if (newLogProb < minLogProb[neighbor.node]) {
              minLogProb[neighbor.node] = newLogProb
              minHeap.push({node: neighbor.node, logProb: newLogProb})
          }
      }
  }
  
  return 0 // no path found
}

console.log(maxProbability(3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.2], 0, 2))

