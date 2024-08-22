function findComplement(num: number): number {
  const binary = num.toString(2)
  let result = ''
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      result += '1'
    } else {
      result += '0'
    }
  }
  return result ? parseInt(result, 2) : 0
}

console.log(findComplement(5))
