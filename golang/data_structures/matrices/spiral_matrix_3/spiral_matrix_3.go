package main

import (
	"fmt"
)

func spiralOrder(rows int, cols int, rStart int, cStart int) [][]int {
	directions := [][]int{
		{0, 1},  // right
		{1, 0},  // down
		{0, -1}, // left
		{-1, 0}, // up
	}
	currentDirection := 0
	steps := 1
	r, c := rStart, cStart
	result := [][]int{}
	visited := make(map[string]bool)

	for len(result) < rows * cols {
		for i := 0; i < steps; i++ {
			if r >= 0 && r < rows && c >= 0 && c < cols && !visited[fmt.Sprintf("%d,%d", r, c)] {
				result = append(result, []int{r, c})
				visited[fmt.Sprintf("%d,%d", r, c)] = true
			}
			r += directions[currentDirection][0]
			c += directions[currentDirection][1]
		}

		currentDirection = (currentDirection + 1) % 4

		if currentDirection == 0 || currentDirection == 2 {
			steps++
		}
	}

	return result
}

func main() {
	fmt.Println(spiralOrder(5, 6, 1, 4))
}