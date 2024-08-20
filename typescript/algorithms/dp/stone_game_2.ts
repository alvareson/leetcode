function stoneGameII(piles: number[]): number {
  const n = piles.length
  const dp: number[][] = Array.from({ length: n }, () => Array(n + 1).fill(-1))
  
  function helper(i: number, M: number): number {
      if (i >= n) return 0
      if (dp[i][M] !== -1) return dp[i][M]
      
      let maxStones = 0
      let currentSum = 0
      
      for (let x = 1; x <= 2 * M && i + x <= n; x++) {
          currentSum += piles[i + x - 1]
          maxStones = Math.max(maxStones, currentSum + (sumFrom(i + x) - helper(i + x, Math.max(M, x))))
      }
      
      dp[i][M] = maxStones
      return maxStones
  }
  
  // sum of piles from index i to end
  const sumFrom = (i: number): number => {
      return piles.slice(i).reduce((a, b) => a + b, 0)
  }
  
  return helper(0, 1)
}

console.log(stoneGameII([2, 7, 9, 4, 4]))
