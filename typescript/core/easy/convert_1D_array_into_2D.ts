function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) return []
  let finalArray: number[][] = []
  let countArray = 0
  for (let i = 0; i < m; i++) {
    finalArray[i] = []
    for (let j = 0; j < n; j++) {
      finalArray[i][j] = original[countArray + j]
    }
    countArray += n
  }
  return finalArray
}

console.log(construct2DArray([1,1,1,1], 4, 1))
