package main

import (
  "fmt"
  "math"
)

func fillPrefixSum(nums []int) []int {
	prefixSum := make([]int, len(nums))
	prefixSum[0] = nums[0]
	for i := 1; i < len(nums); i++ {
		prefixSum[i] = prefixSum[i-1] + nums[i]
	}
	return prefixSum
}

func gridGame(grid [][]int) int64 {
  n := len(grid[0])
  prefixTop := fillPrefixSum(grid[0])
  prefixBottom := fillPrefixSum(grid[1])

  totalTop := prefixTop[n-1]

  ans := int64(math.MaxInt64)
  for i := 0; i < n; i++ {
    // topScore - score 2nd robot collects from top row if dropped to 2nd row at i-th col
		topScore := int64(totalTop)
		topScore = int64(totalTop - prefixTop[i])
    fmt.Println(topScore)

    // bottomScore - score 2nd robot collects from bottom row if dropped to 2nd row at i-th col
		bottomScore := int64(0)
		if i > 0 {
			bottomScore = int64(prefixBottom[i-1])
		}

		secondRobotScore := topScore
		if bottomScore > secondRobotScore {
			secondRobotScore = bottomScore
		}

		if secondRobotScore < int64(ans) {
			ans = secondRobotScore
		}
  }
	return ans
}

func main() {
	fmt.Println(gridGame([][]int{{2, 5, 4}, {1, 5, 1}}))
}
