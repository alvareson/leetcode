function findTheLongestSubstring(s: string):number {
  const n = s.length
  let result = 0
  let mask = 0
  const maskIndexMap = new Map<number, number>()
  maskIndexMap.set(0, -1)
  const vowels = { 'a': 1 << 0, 'e': 1 << 1, 'i': 1 << 2, 'o': 1 << 3, 'u': 1 << 4 }

  for (let i = 0; i < n; i++) {
    const char = s[i]
    if (char in vowels) {
      mask ^= vowels[char]
    }
    if (maskIndexMap.has(mask)) {
      result = Math.max(result, i - maskIndexMap.get(mask)!)
    } else {
      maskIndexMap.set(mask, i)
    }
  }
  return result
}

/*
Bitwise Left Shift (<<):

The << operator shifts the bits of the number to the left by the specified number of positions.
1 << n means shifting the binary representation of 1 left by n positions.
Example:

'a': 1 << 0 → 1 (binary 00001)
'e': 1 << 1 → 2 (binary 00010)
'i': 1 << 2 → 4 (binary 00100)
'o': 1 << 3 → 8 (binary 01000)
'u': 1 << 4 → 16 (binary 10000)

_____________________________________________
XOR Operation (^=):

The XOR operation toggles the bits.
If the vowel has occurred an odd number of times, its corresponding bit in mask is 1.
If the vowel has occurred an even number of times, its corresponding bit in mask is 0.
*/
