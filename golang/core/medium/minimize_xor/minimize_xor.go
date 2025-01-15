package main

import (
	"fmt"
	"math/bits"
)

func minimizeXor(num1 int, num2 int) int {
	// number of bits to set in x
	bitsNeeded := bits.OnesCount(uint(num2))

	// collect positions of set bits in num1 (descending order)
	setPos := make([]int, 0)
	// collect positions of zero bits in num1 (ascending order)
	zeroPos := make([]int, 0)

	// check up to 31 bits (enough for int up to around 2^31)
	for i := 31; i >= 0; i-- {
		if (num1 & (1 << i)) != 0 {
			setPos = append(setPos, i)
		}
	}
	for i := 0; i <= 31; i++ {
		if (num1 & (1 << i)) == 0 {
			zeroPos = append(zeroPos, i)
		}
	}

	x := 0

	// 1) Try to match the highest set bits of num1
	for _, pos := range setPos {
		if bitsNeeded > 0 {
			x |= (1 << pos)
			bitsNeeded--
		} else {
			break
		}
	}

	// 2) If we still need more bits, use positions where num1 == 0 (lowest first)
	for _, pos := range zeroPos {
		if bitsNeeded > 0 {
			x |= (1 << pos)
			bitsNeeded--
		} else {
			break
		}
	}

	return x
}

func main() {
	fmt.Println(minimizeXor(1, 12))
}