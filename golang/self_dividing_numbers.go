package main

import (
	"fmt"
	"strconv"
)

func selfDividingNumbers(left int, right int) []int {
	result := []int{}
	for i := left; i <= right; i++ {
		strNum := strconv.Itoa(i)
		isSelfDividing := true

		for _, char := range strNum {
			if char == '0' {
				isSelfDividing = false
				break
			}
			digit, _ := strconv.Atoi(string(char))
			if i%digit != 0 {
				isSelfDividing = false
				break
			}
		}

		if isSelfDividing {
			result = append(result, i)
		}
	}
	return result
}

func main() {
	fmt.Println(selfDividingNumbers(1, 22))
}