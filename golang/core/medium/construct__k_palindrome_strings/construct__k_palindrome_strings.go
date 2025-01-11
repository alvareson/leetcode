package main

import "fmt"

func canConstruct(s string, k int) bool {
	if len(s) < k {
		return false
	}

	charCount := make(map[rune]int)
	for _, ch := range s {
		charCount[ch]++
	}

	oddCount := 0
	for _, count := range charCount {
		if count % 2 != 0 {
			oddCount++
		}
	}

	return oddCount <= k
}

func main() {
	fmt.Println(canConstruct("annabelle", 2))
	fmt.Println(canConstruct("leetcode", 3))
}