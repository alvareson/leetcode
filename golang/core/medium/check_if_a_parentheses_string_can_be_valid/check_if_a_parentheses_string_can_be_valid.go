package main

import (
	"fmt"
)

func canBeValid(s string, locked string) bool {
	n := len(s)
	if n % 2 != 0 {
		return false
	}

	openCount, closeCount := 0, 0
	freeCount := 0

	for i := 0; i < n; i++ {
		if locked[i] == '1' {
			if s[i] == '(' {
				openCount++
			} else {
				closeCount++
			}
		} else {
			freeCount++
		}

		if closeCount > openCount+freeCount {
			return false
		}
	}

	openCount, closeCount, freeCount = 0, 0, 0

	for i := n - 1; i >= 0; i-- {
		if locked[i] == '1' {
			if s[i] == ')' {
				closeCount++
			} else {
				openCount++
			}
		} else {
			freeCount++
		}

		if openCount > closeCount+freeCount {
			return false
		}
	}

	return true
}

func main() {
	s1, locked1 := "))()))", "010100"
	s2, locked2 := "()()", "0000"
	s3, locked3 := ")", "0"

	fmt.Println(canBeValid(s1, locked1))
	fmt.Println(canBeValid(s2, locked2))
	fmt.Println(canBeValid(s3, locked3))
}
