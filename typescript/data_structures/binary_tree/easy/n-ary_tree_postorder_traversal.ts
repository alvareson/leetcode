class _Node {
  val: number
  children: _Node[]
  constructor(val?: number) {
      this.val = (val === undefined ? 0 : val)
      this.children = []
  }
}

function postorder(root: _Node | null): number[] {
  const result: number[] = []

  function traverse(node: _Node | null): void {
      if (!node) return

      for (const child of node.children) {
          traverse(child)
      }
      result.push(node.val)
  }

  traverse(root)
  return result
}