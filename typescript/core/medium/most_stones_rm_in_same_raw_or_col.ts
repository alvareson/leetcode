class DisjointSet {
  private parent: Map<number, number>
  private rank: Map<number, number>

  constructor() {
      this.parent = new Map()
      this.rank = new Map()
  }

  find(x: number): number {
      if (!this.parent.has(x)) {
          this.parent.set(x, x)
          this.rank.set(x, 0)
          return x
      }

      if (this.parent.get(x) !== x) {
          this.parent.set(x, this.find(this.parent.get(x)!))
      }
      return this.parent.get(x)!
  }

  union(x: number, y: number): void {
      let xRoot = this.find(x)
      let yRoot = this.find(y)

      if (xRoot === yRoot) return

      if (this.rank.get(xRoot)! < this.rank.get(yRoot)!) {
          this.parent.set(xRoot, yRoot)
      } else if (this.rank.get(xRoot)! > this.rank.get(yRoot)!) {
          this.parent.set(yRoot, xRoot)
      } else {
          this.parent.set(yRoot, xRoot);
          this.rank.set(xRoot, this.rank.get(xRoot)! + 1)
      }
  }
}

function removeStones(stones: number[][]): number {
  const ds = new DisjointSet()
  
  for (const [x, y] of stones) {
      // use x + 10001 for row and y for column to avoid collision
      ds.union(x + 10001, y)
  }
  
  const uniqueRoots = new Set()
  for (const [x, y] of stones) {
      uniqueRoots.add(ds.find(x + 10001))
  }
  
  return stones.length - uniqueRoots.size
}