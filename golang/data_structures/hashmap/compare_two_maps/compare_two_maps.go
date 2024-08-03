package main

import (
    "fmt"
)

func canBeEqual(target []int, arr []int) bool {
	hashmapTarget := make(map[int]int)
	hashmapArr := make(map[int]int)

	for _, num := range target {
		hashmapTarget[num]++
	}

	for _, num := range arr {
		hashmapArr[num]++
	}

	if len(hashmapTarget) != len(hashmapArr) {
		return false
	}

	for key, value := range hashmapTarget {
		if hashmapArr[key] != value {
			return false
		}
	}

    return true
}

func main() {
	fmt.Println(canBeEqual([]int{3, 7, 9}, []int{3, 7, 11}))
}