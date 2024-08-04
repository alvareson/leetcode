package main

import (
    "fmt"
	"sort"
)

const MOD = 1000000007

func rangeSum(nums []int, n int, left int, right int) int {
	subarraySums := []int{}

	for i := 0; i < n; i++ {
		currentSum := 0
		for j := i; j < n; j++ {
			currentSum += nums[j]
			subarraySums = append(subarraySums, currentSum)
		}
	}

	sort.Ints(subarraySums)

	resultSum := 0
	for k := left - 1; k < right; k++ {
		resultSum = (resultSum + subarraySums[k]) % MOD
	}

	return resultSum
}

func main() {
	fmt.Println(rangeSum([]int{1, 2, 3, 4}, 4, 3, 4))
}