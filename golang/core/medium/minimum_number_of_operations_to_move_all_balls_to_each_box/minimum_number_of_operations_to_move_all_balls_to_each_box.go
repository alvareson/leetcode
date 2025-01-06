package main

import (
	"fmt"
	// "math"
)

func minOperations(boxes string) []int {
	result := make([]int, len(boxes))
	// Approach 2
	// left to right
	count, operations := 0, 0
	for i := 0; i < len(boxes); i++ {
		result[i] += operations
		if boxes[i] == '1' {
			count++
		}
		operations += count
	}

	// right to left
	count, operations = 0, 0
	for i := len(boxes) - 1; i >= 0; i-- {
		result[i] += operations
		if boxes[i] == '1' {
			count++
		}
		operations += count
	}

	// Approach 1
	// for i := range boxes {
	// 	count := 0
	// 	for j := 0; j < i; j++ {
	// 		if boxes[j] == '1' {
	// 			count += int(math.Abs(float64(i - j)))
	// 		}
	// 	}
	// 	for j := i + 1; j < len(boxes); j++ {
	// 		if boxes[j] == '1' {
	// 			count += int(math.Abs(float64(i - j)))
	// 		}
	// 	}
	// 	result[i] = count
	// }
	return result
}

func main() {
	boxes := "110"
	fmt.Println(minOperations(boxes))
}
