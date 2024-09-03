package main

import (
	"fmt"
)

func chalkReplacer(chalk []int, k int) int {
	sumOfCircle := 0
	for _, c := range chalk {
		sumOfCircle += c
	}
	k %= sumOfCircle
	for i, c := range chalk {
		if k < c {
			return i
		}
		k -= c
	}
  return 0
}

func main() {
	fmt.Println(chalkReplacer([]int{5, 1, 5}, 22))
}