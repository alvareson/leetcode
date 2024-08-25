function nearestPalindromic(n: string): string {
  const num = BigInt(n)
  const length = n.length
  
  const generatePalindrome = (half: string): bigint => {
      const reversed = half.slice(0, length % 2 ? -1 : undefined).split('').reverse().join('')
      return BigInt(half + reversed)
  }
  
  const candidates: bigint[] = []
  
  const half = n.slice(0, Math.ceil(length / 2))
  const halfNum = BigInt(half)
  
  for (let i of [-1n, 0n, 1n]) {
      const newHalf = (halfNum + i).toString()
      candidates.push(generatePalindrome(newHalf))
  }
  
  candidates.push(BigInt('1' + '0'.repeat(length - 1) + '1'))
  
  if (length > 1) {
      candidates.push(BigInt('9'.repeat(length - 1)))
  }
  
  let closest = candidates[0]
  let minDiff = BigInt(2) ** BigInt(63)
  
  for (const candidate of candidates) {
      if (candidate === num) continue
      
      const diff = candidate > num ? candidate - num : num - candidate
      
      if (diff < minDiff || (diff === minDiff && candidate < closest)) {
          closest = candidate
          minDiff = diff
      }
  }
  
  return closest.toString()
}

console.log(nearestPalindromic('1213'))
