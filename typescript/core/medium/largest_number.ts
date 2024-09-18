function largestNumber(nums: number[]): string {
  const strNums = nums.map(String)
  
  strNums.sort((a, b) => (b + a).localeCompare(a + b))
  
  const result = strNums.join('')

  return result[0] === '0' ? '0' : result
}

console.log(largestNumber([10, 2]))