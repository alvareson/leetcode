package main

import (
	"fmt"
)

func wordSubsets(words1 []string, words2 []string) []string {
	count := func(word string) [26]int {
		var freq [26]int
		for _, ch := range word {
			freq[ch-'a']++
		}
		return freq
	}

	var maxFreq [26]int
	for _, word := range words2 {
		for i, freq := range count(word) {
			if freq > maxFreq[i] {
				maxFreq[i] = freq
			}
		}
	}

	isCommon := func(word string) bool {
		freq := count(word)
		for i, maxFreqCount := range maxFreq {
			if freq[i] < maxFreqCount {
				return false
			}
		}
		return true
	}

	var result []string
	for _, word := range words1 {
		if isCommon(word) {
			result = append(result, word)
		}
	}

	return result
}

func main() {
	words1 := []string{"amazon", "apple", "facebook", "google", "leetcode"}
	words2 := []string{"e", "o"}
	fmt.Println(wordSubsets(words1, words2))

	words1 = []string{"amazon", "apple", "facebook", "google", "leetcode"}
	words2 = []string{"l", "e"}
	fmt.Println(wordSubsets(words1, words2))
}
