package main

import (
    "fmt"
)

func minDays(grid [][]int) int {
	rows := len(grid)
	cols := len(grid[0])

	countIslands := func(grid [][]int) int {
		// create a 2D array to track visited cells
		visited := make([][]bool, rows)
		for i := range visited {
            visited[i] = make([]bool, cols)
        }

		numIslands := 0

		directions := [][]int{
			{-1, 0}, // up
			{1, 0},  // down
			{0, -1}, // left
			{0, 1},  // right
		}

		// depth first Search (DFS) function to explore the connected land cells
		var dfs func(i, j int)
		dfs = func(i, j int) {
			if i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == 0 || visited[i][j] {
				return
			}
			visited[i][j] = true // mark the current cell as visited
			
			// recursively explore all neighboring cells
			for _, d := range directions {
				dfs(i+d[0], j+d[1])
			}
		}

		// iterate over each cell in the grid
		for i := 0; i < rows; i++ {
            for j := 0; j < cols; j++ {
                if grid[i][j] == 1 && !visited[i][j] { // if the cell is land and hasn't been visited
                    numIslands++
                    dfs(i, j) // explore the entire island using DFS
                }
            }
        }

        return numIslands
	}

	// check if the grid is already disconnected
	if countIslands(grid) != 1 {
        return 0 
    }

	// algo of disconnecting the grid by turning each land cell to water
	for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if grid[i][j] == 1 { // if the cell is land
                grid[i][j] = 0 // temporarily change the land cell to water

                if countIslands(grid) != 1 { // check if this change causes disconnection
                    return 1 // if the grid is disconnected, return 1
                }

                grid[i][j] = 1 // restore the cell back to land if it didn't disconnect the grid
            }
        }
    }

	return 2
}

func main() {
	grid := [][]int{
		{0 , 1, 1, 0},
		{0 , 1, 1, 0},
		{0 , 0, 0, 0},
	}
	fmt.Println(minDays(grid))
}


/*
You are given an m x n binary grid grid where 1 represents land and 0 represents water.
An island is a maximal 4-directionally (horizontal or vertical) connected group of 1's.

The grid is said to be connected if we have exactly one island, otherwise is said disconnected.
In one day, we are allowed to change any single land cell (1) into a water cell (0).

Return the minimum number of days to disconnect the grid.

Example 1:
Input: grid = [
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
]
Output: 2

Explanation: We need at least 2 days to get a disconnected grid.
Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.
*/