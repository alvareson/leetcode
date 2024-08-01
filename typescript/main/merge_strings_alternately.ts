function mergeAlternately(word1: string, word2: string): string {
    let merged = ""
    let i = 0, j = 0

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i]
            i++
        }
        if (j < word2.length) {
            merged += word2[j]
            j++
        }
    }
    return merged
}

console.log(mergeAlternately("ab", "pqrs"));
