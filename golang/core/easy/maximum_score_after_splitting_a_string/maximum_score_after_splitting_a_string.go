package main

import (
	"fmt"
)

func maxScore(s string) int {
	zeros, ones, max := 0, 0, 0
	for _, ch := range s {
		if ch == '1' {
			ones++
		}
	}

	for i := 0; i < len(s) - 1; i++ {
		if s[i] == '0' {
			zeros++
		} else {
			ones--
		}
		fmt.Printf("zeros: %d, ones: %d\n", zeros, ones)
		if score := zeros + ones; score > max {
			max = score
		}
	}
	return max
}

func main() {
	fmt.Println(maxScore("011101"))
}
