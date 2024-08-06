package main

import (
	"fmt"
	"sort"
)

func minimumPushes(word string) int {
	hashmapKeyboard := map[string][]string{
		"2": {},
		"3": {},
		"4": {},
		"5": {},
		"6": {},
		"7": {},
		"8": {},
		"9": {},
	}

	hashmapWord := map[string]int{}
	for _, letter := range word {
		hashmapWord[string(letter)]++
	}

	// create sortedEntries and sort them
	type kv struct {
		Key   string
		Value int
	}
	var sortedEntries []kv
	for k, v := range hashmapWord {
		sortedEntries = append(sortedEntries, kv{k, v})
	}
	sort.Slice(sortedEntries, func(i, j int) bool {
		return sortedEntries[i].Value > sortedEntries[j].Value
	})


	keys := []string{}
	for k := range hashmapKeyboard {
		keys = append(keys, k)
	}
	sort.Strings(keys)

    index := 0
	for _, entry := range sortedEntries {
		numberKey := keys[index % len(keys)]
		hashmapKeyboard[numberKey] = append(hashmapKeyboard[numberKey], entry.Key)
		index++
	}

	reverseLookup := map[string]struct {
		number string
		index  int
	}{}
	for number, letters := range hashmapKeyboard {
		for idx, letter := range letters {
			reverseLookup[letter] = struct {
				number string
				index  int
			}{number, idx}
		}
	}

	countOfPushes := 0
	for _, letter := range word {
		info, found := reverseLookup[string(letter)]
		if found {
			countOfPushes += info.index + 1
		}
	}
	return countOfPushes
}

func main() {
	fmt.Println(minimumPushes("aabbccddeeffgghhiiiiii"))
}