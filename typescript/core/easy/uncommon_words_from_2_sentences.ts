function uncommonFromSentences(s1: string, s2: string): string[] {
  const words1 = s1.split(' ')
  const words2 = s2.split(' ')
  const wordCount: Record<string, number> = {}

  for (const word of words1) {
    wordCount[word] = (wordCount[word] || 0) + 1
  }
  for (const word of words2) {
    wordCount[word] = (wordCount[word] || 0) + 1
  }
  
  const uncommonWords: string[] = []

  for (const word in wordCount) {
    if (wordCount[word] === 1) {
      uncommonWords.push(word)
    }
  }
  return uncommonWords
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))