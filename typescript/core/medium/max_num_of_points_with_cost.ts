function maxPoints(points: number[][]): number {
  const m = points.length
  const n = points[0].length
  let dp = points[0].slice() // start with the first row

  for (let r = 1; r < m; r++) {
      const left_max = new Array(n).fill(0)
      const right_max = new Array(n).fill(0)
      const new_dp = new Array(n).fill(0)

      // calc left_max array
      left_max[0] = dp[0]
      for (let c = 1; c < n; c++) {
          left_max[c] = Math.max(left_max[c - 1] - 1, dp[c])
      }

      // calc right_max array
      right_max[n - 1] = dp[n - 1]
      for (let c = n - 2; c >= 0; c--) {
          right_max[c] = Math.max(right_max[c + 1] - 1, dp[c])
      }

      // calc new_dp for current row
      for (let c = 0; c < n; c++) {
          new_dp[c] = points[r][c] + Math.max(left_max[c], right_max[c])
      }

      dp = new_dp // mv to next row
  }

  return Math.max(...dp) // return max value in the last dp array
}

console.log(maxPoints([[1,2,3],[1,5,1],[3,1,1]]))
