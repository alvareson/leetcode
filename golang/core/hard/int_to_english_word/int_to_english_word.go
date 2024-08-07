package main

import (
	"fmt"
	"strings"
)

func numberToWords(num int) string {
	if num == 0 {
		return "Zero"
	}

	belowTwenty := []string{
		"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
		"Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
		"Eighteen", "Nineteen",
	}
	tens := []string{
		"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
	}
	thousands := []string{"", "Thousand", "Million", "Billion"}

	var helper func(n int) string
	helper = func(n int) string {
		if n == 0 {
			return ""
		} else if n < 20 {
			return belowTwenty[n] + " "
		} else if n < 100 {
			return tens[n / 10] + " " + helper(n % 10)
		} else {
			return belowTwenty[n / 100] + " Hundred " + helper(n % 100)
		}
	}

	result := ""
	unit := 1
	for i := 0; i < len(thousands); i++ {
		if (num / unit) % 1000 != 0 {
			result = helper( (num / unit) % 1000 ) + thousands[i] + " " + result
		}
		unit *= 1000
	}

	return strings.TrimSpace(result)
}

func main() {
	fmt.Println(numberToWords(123))
}
