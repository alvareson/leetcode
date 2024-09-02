function chalkReplacer(chalk: number[], k: number): number {
  let student = 0
  const sumOfCircle = chalk.reduce((sum, curr) => sum + curr, 0)
  k = k % sumOfCircle
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i
    k -= chalk[i]
  }
  return student
}

console.log(chalkReplacer([5,1,5], 22))
