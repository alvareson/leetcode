function arrayRankTransform(arr: number[]): number[] {
  const sortedArr = [...arr].sort((a, b) => a - b)
  const map = new Map()
  let rank = 1
  for (const num of sortedArr) {
    if (!map.has(num)) {
      map.set(num, rank)
      rank++
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = map.get(arr[i])
  }
  return arr
}

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))