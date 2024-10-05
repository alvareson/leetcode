function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const s1Map: Map<string, number> = new Map()
  for (let char of s1) {
      s1Map.set(char, (s1Map.get(char) || 0) + 1)
  }

  const s2Map: Map<string, number> = new Map()
  let left = 0, right = 0
  
  while (right < s1.length) {
      const char = s2[right]
      s2Map.set(char, (s2Map.get(char) || 0) + 1)
      right++
  }

  const compareMaps = (map1: Map<string, number>, map2: Map<string, number>) => {
      if (map1.size !== map2.size) return false
      for (let [key, value] of map1) {
          if (map2.get(key) !== value) return false
      }
      return true
  }

  if (compareMaps(s1Map, s2Map)) return true

  while (right < s2.length) {
      const charToAdd = s2[right]
      s2Map.set(charToAdd, (s2Map.get(charToAdd) || 0) + 1)

      const charToRemove = s2[left]
      if (s2Map.get(charToRemove) === 1) {
          s2Map.delete(charToRemove)
      } else {
          s2Map.set(charToRemove, s2Map.get(charToRemove)! - 1)
      }

      left++
      right++

      if (compareMaps(s1Map, s2Map)) return true
  }

  return false
}

console.log(checkInclusion("ab", "eidbaooo"))