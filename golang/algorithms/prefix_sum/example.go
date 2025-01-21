package main

import "fmt"

func fillPrefixSum(nums []int) []int {
	prefixSum := make([]int, len(nums))
	prefixSum[0] = nums[0]

	for i := 1; i < len(nums); i++ {
		prefixSum[i] = prefixSum[i-1] + nums[i]
	}

	return prefixSum
}

func main() {
	numsArray := []int{5, 10, 30, 4, 5}
	prefixSumArray := fillPrefixSum(numsArray)
	fmt.Println(prefixSumArray)
}
