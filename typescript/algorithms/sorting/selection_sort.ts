function selectionSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // Swap the found minimum element with the first unsorted element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]))
