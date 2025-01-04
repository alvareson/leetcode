package main

import "fmt"

func countPalindromicSubsequence(s string) int {
	charOccurrences := make(map[rune][2]int)
	for i := 'a'; i <= 'z'; i++ {
		charOccurrences[i] = [2]int{-1, -1}
	}
	for i, char := range s {
		occurrences := charOccurrences[char]
		if occurrences[0] == -1 {
			occurrences[0] = i // first occurrence
		}
		occurrences[1] = i // last occurrence
		charOccurrences[char] = occurrences
	}
	uniquePalindromesCount := 0
	for _, occurrences := range charOccurrences {
		if occurrences[0] != -1 && occurrences[1] != -1 && occurrences[0] < occurrences[1] {
			// fmt.Printf("char: %c, occurrences: %v\n", rune(s[occurrences[0]]), occurrences)
			middleChars := make(map[rune]bool)
			for i := occurrences[0] + 1; i < occurrences[1]; i++ {
				middleChars[rune(s[i])] = true
			}
			// for char, v := range middleChars {
			// 	fmt.Printf("char: %c, val %v\n", char, v)
			// }
			uniquePalindromesCount += len(middleChars)
		}
		
	}
  return uniquePalindromesCount
}

func main() {
	fmt.Println(countPalindromicSubsequence("bbcbaba"))
}