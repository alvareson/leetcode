function minimumPushes(word: string): number {
    const hashmapKeyboard: Map<string, string[]> = new Map<string, string[]>([
        ['2', []],
        ['3', []],
        ['4', []],
        ['5', []],
        ['6', []],
        ['7', []],
        ['8', []],
        ['9', []]
    ])

    const hashmapWord: Map<string, number> = new Map<string, number>()
    for (const letter of word) {
        hashmapWord.set(letter, (hashmapWord.get(letter) || 0) + 1)
    }

    const sortedEntries = Array.from(hashmapWord.entries()).sort((a, b) => b[1] - a[1])
    const numbers = Array.from(hashmapKeyboard.keys())

    let index = 0
    for (const [letter, _] of sortedEntries) {
        const numberKey = numbers[index % numbers.length]
        hashmapKeyboard.get(numberKey)?.push(letter)
        index++
    }

    const reverseLookup: Map<string, { number: string, index: number }> = new Map()
    for (const [number, letters] of hashmapKeyboard) {
        letters.forEach((letter, idx) => {
            reverseLookup.set(letter, { number, index: idx })
        })
    }

    let countOfPushes = 0
    for (const letter of word) {
        const info = reverseLookup.get(letter)
        if (info) {
            countOfPushes += info.index + 1
        }
    }
    return countOfPushes
}

console.log(minimumPushes("aabbccddeeffgghhiiiiii"))
