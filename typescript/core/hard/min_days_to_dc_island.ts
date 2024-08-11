function minDays(grid: number[][]): number {
    const rows = grid.length
    const cols = grid[0].length

    const countIslands = (grid: number[][]): number => {
        // create a 2D array to track visited cells
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        let numIslands = 0

        const directions = [
            [-1, 0], // up
            [1, 0],  // down
            [0, -1], // left
            [0, 1],  // right
        ]

        // depth first Search (DFS) function to explore the connected land cells
        const dfs = (i: number, j: number): void => {
            // base case - check boundaries and if the cell is water or already visited
            if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0 || visited[i][j]) {
                return
            }
            visited[i][j] = true // mark the current cell as visited
            // recursively explore all neighboring cells
            for (const [di, dj] of directions) {
                dfs(i + di, j + dj)
            }
        }

        // iterate over each cell in the grid
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // if the cell is land and hasn't been visited, it's a new island
                if (grid[i][j] === 1 && !visited[i][j]) {
                    numIslands++
                    dfs(i, j) // explore the entire island using DFS
                }
            }
        }

        return numIslands
    }

    // check if the grid is already disconnected 
    if (countIslands(grid) !== 1) {
        return 0
    }
    
    // algo of disconnecting the grid by turning each land cell to water
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) { // if the cell is land
                grid[i][j] = 0 // temporarily change the land cell to water

                if (countIslands(grid) !== 1) { // check if this change causes disconnection
                    return 1 // if the grid is disconnected, return 1
                }

                grid[i][j] = 1 // restore the cell back to land if it didn't disconnect the grid
            }
        }
    }
    
    return 2
}

console.log(minDays([[0,1,1,0],[0,1,1,0],[0,0,0,0]]))



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