package main

import "fmt"

func findThePrefixCommonArray(A []int, B []int) []int {
	output := make([]int, len(A))
	dictA := make(map[int]int)
	dictB := make(map[int]int)
	for i := 0; i < len(A); i++ {
		dictA[A[i]]++
		dictB[B[i]]++

		commonCount := 0
		for key := range dictA {
			if dictB[key] > 0 {
				commonCount++
			}
		}

		output[i] = commonCount
	}
	return output
}

func main() {
	fmt.Println(findThePrefixCommonArray([]int{1, 3, 2, 4}, []int{3, 1, 2, 4}))
}