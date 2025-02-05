package main

import "fmt"

func areAlmostEqual(s1 string, s2 string) bool {
	if (s1 == s2) { return true }
	s1freq := make(map[rune]int)
	s2freq := make(map[rune]int)

	for _, char := range s1 {
		s1freq[char]++
	}
	for _, char := range s2 {
		s2freq[char]++
	}
	for char, count := range s1freq {
		if s2freq[char] != count {
			return false
		}
	}

	s1dict := make(map[int]rune)
	s2dict := make(map[int]rune)

	for i, char := range s1 {
		s1dict[i] = char
	}
	for i, char := range s2 {
		s2dict[i] = char
	}

	// for k, v := range s2dict {
	// 	fmt.Printf("%d - %c\n", k, v)
	// }

	diffIndexes := []int{}
	for i := range s1 {
		if s1[i] != s2[i] {
			diffIndexes = append(diffIndexes, i)
		}
	}

	if len(diffIndexes) != 2 {
		return false
	}
	fmt.Println(diffIndexes)

	i, j := diffIndexes[0], diffIndexes[1]
	return s1[i] == s2[j] && s1[j] == s2[i]
}

func main() {
	fmt.Println(areAlmostEqual("bank", "kanb"))
}