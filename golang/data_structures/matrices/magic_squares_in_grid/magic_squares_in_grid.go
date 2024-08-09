package main

import "fmt"

func numMagicSquaresInside(grid [][]int) int {
    isMagicSquare := func(r, c int) bool {
        s := make(map[int]bool)

        for i := 0; i < 3; i++ {
            for j := 0; j < 3; j++ {
                num := grid[r+i][c+j]
                if num < 1 || num > 9 || s[num] {
                    return false
                }
                s[num] = true
            }
        }

        // Check if the sum of rows, columns, and diagonals equals 15
        rowSum1 := grid[r][c] + grid[r][c+1] + grid[r][c+2]
        rowSum2 := grid[r+1][c] + grid[r+1][c+1] + grid[r+1][c+2]
        rowSum3 := grid[r+2][c] + grid[r+2][c+1] + grid[r+2][c+2]

        colSum1 := grid[r][c] + grid[r+1][c] + grid[r+2][c]
        colSum2 := grid[r][c+1] + grid[r+1][c+1] + grid[r+2][c+1]
        colSum3 := grid[r][c+2] + grid[r+1][c+2] + grid[r+2][c+2]

        diagSum1 := grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2]
        diagSum2 := grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c]

        return rowSum1 == 15 && rowSum2 == 15 && rowSum3 == 15 &&
            colSum1 == 15 && colSum2 == 15 && colSum3 == 15 &&
            diagSum1 == 15 && diagSum2 == 15
    }

    count := 0

    for r := 0; r <= len(grid)-3; r++ {
        for c := 0; c <= len(grid[0])-3; c++ {
            if isMagicSquare(r, c) {
                count++
            }
        }
    }

    return count
}

func main() {
    grid := [][]int{
        {4, 3, 8, 4},
        {9, 5, 1, 9},
        {2, 7, 6, 2},
    }
    fmt.Println(numMagicSquaresInside(grid))
}
