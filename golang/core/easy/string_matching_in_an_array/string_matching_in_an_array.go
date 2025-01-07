package main

import (
	"fmt"
	"strings"
)

func stringMatching(words []string) []string {
	resultMap := make(map[string]bool)
	for i, word := range words {
		for j := 0; j < len(words); j++ {
			if i != j && strings.Contains(words[j], word) {
				resultMap[word] = true
			}
		}
	}

	resultSlice := []string{}
	for word := range resultMap {
		resultSlice = append(resultSlice, word)
	}
	return resultSlice
}

func main() {
	words := []string{"mass", "as", "hero", "superhero"}
	fmt.Println(stringMatching(words))
}
