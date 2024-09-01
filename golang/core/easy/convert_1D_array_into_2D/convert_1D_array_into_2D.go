package main

import (
	"fmt"
)

func construct2DArray(original []int, m int, n int) [][]int {
	if (len(original) != m * n) {
		return [][]int{}
	}
	finalArray := make([][]int, m)
	countArray := 0
	for i := 0; i < m; i++ {
		finalArray[i] = make([]int, n)
		for j := 0; j < n; j++ {
			finalArray[i][j] = original[countArray + j]
		}
		countArray += n
	}
  return finalArray
}

func main() {
	fmt.Println(construct2DArray([]int{1, 2, 3, 4}, 2, 2))
}