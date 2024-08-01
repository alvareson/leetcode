function reversePrefix(word: string, ch: string): string {
    let buffer: string = ""
    let finalIndexBuffer: number = -1
    for (let i: number = 0; i < word.length; i++) {
        buffer += word[i]

        if (word[i] === ch) {
            finalIndexBuffer = i
            break
        }
    }
    if (finalIndexBuffer === -1) {
        return word
    } else {
        let reversed = buffer.split('').reverse().join('')
        return reversed + word.slice(finalIndexBuffer + 1)
    }
}

console.log(reversePrefix("abcdefd", "d"))
