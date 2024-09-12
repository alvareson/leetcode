function countConsistentStrings(allowed: string, words: string[]): number {
  return words.filter(word => {
    for (let i = 0; i < word.length; i++) {
      if (!allowed.includes(word[i])) {
        return false
      }
    }
    return true
  }).length
}

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))