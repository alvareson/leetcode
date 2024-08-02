package main

import (
    "fmt"
)

func minSwaps(nums []int) int {
	countOnes := 0
	for _, num := range nums {
		if num == 1 {
			countOnes++
		}
	}
	
	maxOnesInWindow := 0
	currentOnesInWindow := 0

	for i := 0; i < countOnes; i++ {
		currentOnesInWindow += nums[i]
	}

	maxOnesInWindow = currentOnesInWindow

	for i := 1; i < len(nums); i++ {
		currentOnesInWindow = currentOnesInWindow - nums[i - 1] + nums[(i + countOnes - 1) % len(nums)]
		if currentOnesInWindow > maxOnesInWindow {
			maxOnesInWindow = currentOnesInWindow
		}
	}

    return countOnes - maxOnesInWindow
}

func main() {
	fmt.Println(minSwaps([]int{0, 1, 0, 1, 1, 0, 0}))
}