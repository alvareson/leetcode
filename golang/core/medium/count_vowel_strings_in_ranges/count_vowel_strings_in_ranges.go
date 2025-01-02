package main

import (
	"fmt"
	"time"
)

func vowelStrings(words []string, queries [][]int) []int {
	isVowel := func(c byte) bool {
		return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
	}

	prefixSum := make([]int, len(words) + 1)

	for i, word := range words {
		prefixSum[i + 1] = prefixSum[i]
		if len(word) > 0 && isVowel(word[0]) && isVowel(word[len(word) - 1]) {
			prefixSum[i + 1]++
		}
	}
	
	result := make([]int, len(queries))
	for i, query := range queries {
		left, right := query[0], query[1]
		result[i] = prefixSum[right + 1] - prefixSum[left]
	}
  return result
}

func main() {
	words := []string{"aba", "bcb", "ece", "aa", "e"}
	queries := [][]int{{0, 2}, {1, 4}, {1, 1}}

	start := time.Now()
	result := vowelStrings(words, queries)
	elapsed := time.Since(start)

	fmt.Println("Result:", result)
	fmt.Printf("Execution time: %s\n", elapsed)
}
