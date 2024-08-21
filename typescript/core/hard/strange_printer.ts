function strangePrinter(s: string): number {
  const n = s.length
  if (n === 0) return 0

  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1
    
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i][j - 1]
      } else {
        dp[i][j] = Math.min(
          ...Array.from({ length: j - i }, (_, k) => dp[i][i + k] + dp[i + k + 1][j])
        )
      }
    }
  }
  
  return dp[0][n - 1]
}

console.log(strangePrinter("aaabbb"))
