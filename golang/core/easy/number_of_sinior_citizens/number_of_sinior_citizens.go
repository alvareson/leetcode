package main

import (
    "fmt"
	"strconv"
)

func countSeniors(details []string) int {
	count := 0
	for _, detail := range details {
		ageStr := detail[11:13]
		age, err := strconv.Atoi(ageStr)
		if err == nil && age > 60  {
            count++
        }
	}
	return count
}

func main() {
	details := []string{
		"7868190130M7522",
		"5303914400F9211",
		"9273338290F4010",
	}
	fmt.Println(countSeniors(details))
}