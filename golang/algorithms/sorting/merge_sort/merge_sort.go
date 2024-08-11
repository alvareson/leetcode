package main

import (
	"fmt"
)

// func that sorts an array using the merge sort algorithm
func mergeSort(array []int) []int {
	if len(array) <= 1 {
		return array // base case: arrays with 0 or 1 element are already sorted
	}

	middleIndex := len(array) / 2

	// divide the array into left and right halves
	leftArray := mergeSort(array[:middleIndex])
	rightArray := mergeSort(array[middleIndex:])

	return merge(leftArray, rightArray)
}

// merge merges two sorted arrays into a single sorted array
func merge(leftArray, rightArray []int) []int {
	sortedArray := make([]int, 0, len(leftArray)+len(rightArray))
	i, j := 0, 0

	// compare each element from the left and right arrays and add the smallest one to the sorted array
	for i < len(leftArray) && j < len(rightArray) {
		if leftArray[i] < rightArray[j] {
			sortedArray = append(sortedArray, leftArray[i])
			i++
		} else {
			sortedArray = append(sortedArray, rightArray[j])
			j++
		}
	}

	// if there are remaining elements in the left array, add them to the sorted array
	sortedArray = append(sortedArray, leftArray[i:]...)

	// if there are remaining elements in the right array, add them to the sorted array
	sortedArray = append(sortedArray, rightArray[j:]...)

	return sortedArray
}

func main() {
	array := []int{34, 7, 23, 32, 5, 62}
	sortedArray := mergeSort(array)
	fmt.Println("Sorted array:", sortedArray)
}
