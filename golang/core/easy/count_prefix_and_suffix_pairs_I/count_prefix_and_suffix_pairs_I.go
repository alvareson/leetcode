package main

import (
	"fmt"
	"strings"
)

func isPrefixAndSuffix(str1, str2 string) bool {
	return strings.HasPrefix(str2, str1) && strings.HasSuffix(str2, str1)
}

func countPrefixSuffixPairs(words []string) int {
	count := 0
	for i := 0; i < len(words); i++ {
		for j := i + 1; j < len(words); j++ {
			if isPrefixAndSuffix(words[i], words[j]) {
				count++
			}
		}
	}
	return count
}

func main() {
	words1 := []string{"a", "aba", "ababa", "aa"}
	words2 := []string{"pa", "papa", "ma", "mama"}

	fmt.Println(countPrefixSuffixPairs(words1))
	fmt.Println(countPrefixSuffixPairs(words2))
}
