package main

import (
	"fmt"
	"strings"
)

func prefixCount(words []string, pref string) int {
	count := 0
	for _, word := range words {
		if strings.HasPrefix(word, pref) {
			count++
		}
	}
	return count
}

func main() {
	words := []string{"dog", "deer", "deal"}
	prefix := "de"
	fmt.Println(prefixCount(words, prefix))
}