package main

import (
	"fmt"
)

func waysToSplitArray(nums []int) int {
	prefixSum := make([]int, len(nums) + 1)
	for i := range nums {
		prefixSum[i + 1] = prefixSum[i] + nums[i]
	}
	validSplits := 0
	totalSum := prefixSum[len(nums)]
	for i := 0; i < len(nums) - 1; i++ {
		leftSum := prefixSum[i + 1]
		rightSum := totalSum - leftSum
		if leftSum >= rightSum { validSplits++ }
	}
	return validSplits
}

func main() {
	nums := []int{10, 4, -8, 7}
	fmt.Println(waysToSplitArray(nums))
}