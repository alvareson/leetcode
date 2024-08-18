const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr
  const pivot: number = arr[arr.length - 1]
  const leftArr: number[] = []
  const rightArr: number[] = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort([4, 8, 2, 9, 1]))
