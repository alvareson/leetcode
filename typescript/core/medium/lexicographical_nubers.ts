function lexicalOrder(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1).sort((a, b) => a.toString().localeCompare(b.toString()))
}

console.log(lexicalOrder(13)) // [1,10,11,12,13,2,3,4,5,6,7,8,9]