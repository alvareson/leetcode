const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) return array // base case - arrays with 0 or 1 element are already "sorted"

    const middleIndex = Math.floor(array.length / 2) // find the middle index
    const leftArray = array.slice(0, middleIndex) // divide the array into left and right halves
    const rightArray = array.slice(middleIndex)

    // recursively sort both halves
    const sortedLeftArray = mergeSort(leftArray)
    const sortedRightArray = mergeSort(rightArray)
    
    // merge the sorted halves and return
    return merge(sortedLeftArray, sortedRightArray)
}

const merge = (leftArray: number[], rightArray: number[]): number[] => {
    const sortedArray: number[] = []
    let leftIndex = 0
    let rightIndex = 0

    // compare each element from the left and right arrays and add the smallest one to the sorted array
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            sortedArray.push(leftArray[leftIndex])
            leftIndex++
        } else {
            sortedArray.push(rightArray[rightIndex])
            rightIndex++
        }
    }

    // if there are remaining elements in the left array, add them to the sorted array
    while (leftIndex < leftArray.length) {
        sortedArray.push(leftArray[leftIndex])
        leftIndex++
    }
    // if there are remaining elements in the right array, add them to the sorted array
    while (rightIndex < rightArray.length) {
        sortedArray.push(rightArray[rightIndex])
        rightIndex++
    }
    return sortedArray
}

console.log(mergeSort([-4, 8, 2, -28, 94]))
