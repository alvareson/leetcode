function fractionAddition(expression: string): string {
  const fractions = expression.match(/[+-]?\d+\/\d+/g)
  if (!fractions) {
      return "0/1"
  }
  let numerator = 0
  let denominator = 1

  const gcd = (a: number, b: number): number => {
      return b === 0 ? a : gcd(b, a % b)
  }

  for (const frac of fractions) {
      const [num, denom] = frac.split('/').map(Number)

      numerator = numerator * denom + num * denominator
      denominator *= denom

      const divisor = gcd(Math.abs(numerator), Math.abs(denominator))
      numerator /= divisor
      denominator /= divisor
  }

  return `${numerator}/${denominator}`
}

console.log(fractionAddition("-1/2+1/2"))
