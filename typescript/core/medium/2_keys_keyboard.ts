function minSteps(n: number): number {
  if (n === 1) {
    return 0
  }

  let dp = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; i++) {
    dp[i] = i
    for (let j = Math.floor(i / 2); j >= 2; j--) {
      if (i % j === 0) {
        dp[i] = dp[j] + i / j
        break
      }
    }
  }

  return dp[n]
}

console.log(minSteps(3))
