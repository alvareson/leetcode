function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length
  const totalSum = mean * (n + m)
  const currentSum = rolls.reduce((acc, roll) => acc + roll, 0)
  const missingSum = totalSum - currentSum

  if (missingSum < n || missingSum > 6 * n) {
    return []
  }

  function backtrack(index: number, current: number[], currentSum: number): boolean {
    if (index === n) {
      if (currentSum === missingSum) {
        return true
      }
      return false
    }

    for (let i = 1; i <= 6; i++) {
      if (currentSum + i <= missingSum) {
        current.push(i)
        if (backtrack(index + 1, current, currentSum + i)) {
          return true
        }
        current.pop() // backtrack
      }
    }
    return false
  }

  const result: number[] = []
  if (backtrack(0, result, 0)) {
    return result
  }
  return []
}

console.log(missingRolls([3,2,4,3], 4, 2))