package main

import "fmt"

func shiftingLetters(s string, shifts [][]int) string {
	diffArray := make([]int, len(s))
	for _, shift := range shifts {
		start, end, direction := shift[0], shift[1], shift[2]
		if direction == 1 {
			diffArray[start] += 1
			if end + 1 < len(s) {
				diffArray[end + 1] -= 1
			}
		} else {
			diffArray[start] -= 1
			if end + 1 < len(s) {
				diffArray[end + 1] += 1
			}
		}
	}

	numberOfShifts := 0
	result := make([]byte, len(s))
	for i := 0; i < len(s); i++ {
		numberOfShifts = (numberOfShifts + diffArray[i]) % 26
		if numberOfShifts < 0 {
			numberOfShifts += 26
		}
		result[i] = 'a' + byte((int(s[i]-'a')+numberOfShifts)%26)
	}
	return string(result)

	// Approach 1
	// storeS := []byte(s)
	// for _, shift := range shifts {
	// 	if shift[2] == 0 { // shift backwards
	// 		for i := shift[0]; i <= shift[1]; i++ {
	// 			storeS[i] = 'a' + byte((int(storeS[i] - 'a') + 26 - 1) % 26)
	// 		}
	// 	} else if shift[2] == 1 { // shift forwards
	// 		for i := shift[0]; i <= shift[1]; i++ {
	// 			storeS[i] = 'a' + byte((int(storeS[i] - 'a') + 1) % 26)
	// 		}
	// 	}
	// }
	// return string(storeS)
}

func main() {
		s := "abc"
		shifts := [][]int{{0, 1, 0}, {1, 2, 1}, {0, 2, 1}}
		fmt.Println(shiftingLetters(s, shifts))
}