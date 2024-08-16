package main

import (
	"fmt"
	"math"
)

func maxDistance(arrays [][]int) int {
	minValue := arrays[0][0]
	maxValue := arrays[0][len(arrays[0])-1]
	maxDistance := 0

	if len(arrays) == 2 && len(arrays[0]) == 1 && len(arrays[1]) == 1 {
		return int(math.Abs(float64(arrays[0][0] - arrays[1][0])))
	}

	for arrayIndex := 1; arrayIndex < len(arrays); arrayIndex++ {
		distFromMax := int(math.Abs(float64(arrays[arrayIndex][0] - maxValue)))
		distFromMin := int(math.Abs(float64(arrays[arrayIndex][len(arrays[arrayIndex])-1] - minValue)))
		if distFromMax > maxDistance {
			maxDistance = distFromMax
		}
		if distFromMin > maxDistance {
			maxDistance = distFromMin
		}
		minValue = int(math.Min(float64(minValue), float64(arrays[arrayIndex][0])))
		maxValue = int(math.Max(float64(maxValue), float64(arrays[arrayIndex][len(arrays[arrayIndex])-1])))
	}

	return maxDistance
}

func main() {
	arrays := [][]int{
		{1, 2, 3},
		{1, 2, 3},
		{1, 2, 3},
	}
	fmt.Println(maxDistance(arrays))
}
