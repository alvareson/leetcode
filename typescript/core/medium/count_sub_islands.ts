function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const m = grid1.length
  const n = grid1[0].length
  let subIslands = 0

  function dfs(i: number, j: number): boolean {
      if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) {
          return true
      }

      grid2[i][j] = 0 // mark as visited
      let isSubIsland = grid1[i][j] === 1 // check if this cell is also land in grid1

      // Check all 4 directions
      isSubIsland = dfs(i - 1, j) && isSubIsland
      isSubIsland = dfs(i + 1, j) && isSubIsland
      isSubIsland = dfs(i, j - 1) && isSubIsland
      isSubIsland = dfs(i, j + 1) && isSubIsland

      return isSubIsland
  }

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid2[i][j] === 1) {
              if (dfs(i, j)) {
                  subIslands++
              }
          }
      }
  }

  return subIslands
}

console.log(countSubIslands([[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]],
  [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
))
