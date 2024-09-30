class CustomStack {
  private stack: number[]
  private inc: number[]
  private maxSize: number

  constructor(maxSize: number) {
    this.stack = []
    this.inc = []
    this.maxSize = maxSize
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x)
      this.inc.push(0)
    }
  }

  pop(): number {
    if (this.stack.length === 0) {
        return -1
    }
    const index = this.stack.length - 1
    const increment = this.inc[index]
    if (index > 0) {
        this.inc[index - 1] += increment
    }
    const val = this.stack.pop()! + increment
    this.inc.pop()
    return val
  }

  increment(k: number, val: number): void {
    const index = Math.min(k, this.stack.length) - 1
    if (index >= 0) {
        this.inc[index] += val
    }
  }
}