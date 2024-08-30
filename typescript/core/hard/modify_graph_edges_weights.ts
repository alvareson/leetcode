type Edge = [number, number, number]
type Graph = Array<Array<[number, number]>>

class MinMaxPriorityQueue<T> {
  private heap: T[]
  private compare: (a: T, b: T) => number

  constructor(compare?: (a: T, b: T) => number) {
    this.heap = []
    this.compare = compare || ((a, b) => (a as unknown as number) - (b as unknown as number)) // Default to MinHeap
  }

  // Add a new element to the priority queue
  enqueue(value: T): void {
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  // Remove and return the element with the highest priority (smallest for min-heap, largest for max-heap)
  dequeue(): T | null {
    if (this.heap.length === 0) return null
    const root = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0 && end !== undefined) {
      this.heap[0] = end
      this.heapifyDown(0)
    }
    return root
  }

  // Peek at the element with the highest priority without removing it
  peek(): T | null {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  // Check if the priority queue is empty
  isEmpty(): boolean {
    return this.heap.length === 0
  }

  // Get the size of the priority queue
  size(): number {
    return this.heap.length
  }

  // Maintain heap property by moving element up
  private heapifyUp(index: number): void {
    let parent = Math.floor((index - 1) / 2)
    while (index > 0 && this.compare(this.heap[index], this.heap[parent]) < 0) {
      this.swap(index, parent)
      index = parent
      parent = Math.floor((index - 1) / 2)
    }
  }

  // Maintain heap property by moving element down
  private heapifyDown(index: number): void {
    const length = this.heap.length
    let left = 2 * index + 1
    let right = 2 * index + 2
    let extreme = index

    if (left < length && this.compare(this.heap[left], this.heap[extreme]) < 0) {
      extreme = left
    }

    if (right < length && this.compare(this.heap[right], this.heap[extreme]) < 0) {
      extreme = right
    }

    if (extreme !== index) {
      this.swap(index, extreme)
      this.heapifyDown(extreme)
    }
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

function modifiedGraphEdges(n: number, edges: Edge[], source: number, destination: number, target: number): Edge[] {
  const kMax = 2000000000; // A large value to represent "impossible" weights
  const graph: Graph = Array(n).fill(null).map(() => []) // Adjacency list representation of the graph

  // Build the initial graph, ignoring edges with weight -1
  for (const [u, v, w] of edges) {
    if (w === -1) continue;
    graph[u].push([v, w])
    graph[v].push([u, w])
  }

  // Calculate the shortest distance from source to destination using Dijkstra's algorithm
  const distToDestination = dijkstra(graph, source, destination)

  // If the shortest distance is less than the target, it's impossible to achieve the target
  if (distToDestination < target) return []

  // If the shortest distance equals the target, assign "impossible" weights to all -1 edges
  if (distToDestination === target) {
    for (const edge of edges) {
      if (edge[2] === -1) edge[2] = kMax
    }
    return edges
  }

  // Try to adjust edges with weight -1 to achieve the target distance
  for (let i = 0; i < edges.length; i++) {
    const [u, v, w] = edges[i]

    // Skip edges that already have a valid weight
    if (w !== -1) continue

    // Temporarily set the weight of the current edge to 1
    edges[i][2] = 1
    graph[u].push([v, 1])
    graph[v].push([u, 1])

    // Recalculate the shortest distance with the updated edge
    const newDistToDestination = dijkstra(graph, source, destination)

    // If the new distance is less than or equal to the target
    if (newDistToDestination <= target) {
      // Adjust the weight of the current edge to exactly match the target distance
      edges[i][2] += target - newDistToDestination

      // Assign "impossible" weights to any remaining -1 edges
      for (let j = i + 1; j < edges.length; j++) {
        if (edges[j][2] === -1) edges[j][2] = kMax
      }
      return edges
    }

    // If the target distance isn't achieved, continue with the next -1 edge
  }

  // If it's impossible to achieve the target distance, return an empty array
  return []
}

function dijkstra(graph: Graph, source: number, destination: number): number {
  const distances = new Array(graph.length).fill(Infinity)
  distances[source] = 0
  const heap = new MinMaxPriorityQueue<[number, number]>((a, b) => a[1] - b[1]) // MinHeap based on distance
  heap.enqueue([source, 0])

  while (!heap.isEmpty()) {
    const [u, currentDistance] = heap.dequeue()!

    if (currentDistance > distances[u]) continue;

    for (const [v, weight] of graph[u]) {
      const distance = currentDistance + weight;
      if (distance < distances[v]) {
        distances[v] = distance;
        heap.enqueue([v, distance])
      }
    }
  }

  return distances[destination]
}

console.log(modifiedGraphEdges(5, [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], 0, 1, 5))
