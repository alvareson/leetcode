function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length
  const totalSum = mean * (n + m)
  const currentSum = rolls.reduce((acc, roll) => acc + roll, 0)
  const missingSum = totalSum - currentSum

  if (missingSum < n || missingSum > 6 * n) {
    return []
  }

  const result = new Array(n).fill(1)
  let remainingSum = missingSum - n

  for (let i = 0; i < n; i++) {
    const add = Math.min(5, remainingSum)
    result[i] += add
    remainingSum -= add

    if (remainingSum === 0) {
      break
    }
  }

  return result
}

console.log(missingRolls([3,2,4,3], 4, 2))