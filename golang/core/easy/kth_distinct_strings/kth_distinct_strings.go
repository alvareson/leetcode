package main

import (
	"fmt"
)

func kthDistinct(arr []string, k int) string {
	hashmap := make(map[string]int)
	for _, word := range arr {
		hashmap[word]++
	}

	distinctWords := []string{}
	for _, word := range arr {
		if hashmap[word] == 1 {
			distinctWords = append(distinctWords, word)
		}
	}

	if len(distinctWords) == 0 || len(distinctWords) < k {
		return ""
	}

	return distinctWords[k - 1]
}

func main() {
	fmt.Println(kthDistinct([]string{"d","b","c","b","c","a"}, 2))
}