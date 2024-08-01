function selfDividingNumbers(left: number, right: number): number[] {
    const result: number[] = []
    for (let i = left; i <= right; i++) {
        if (i.toString().length > 1) {
            const stringRepresentation: string = i.toString()
            if (stringRepresentation.includes("0")) {
                continue
            }
            let isSelfDividingNumber: boolean = true
            for (let j = 0; j < stringRepresentation.length; j++) {
                const digit: number = +stringRepresentation[j]
                if (i % digit !== 0) {
                    isSelfDividingNumber = false
                    break
                }
            }
            if (isSelfDividingNumber) result.push(i)
        } else if (i.toString().length === 1) {
            result.push(i)
        }
    }
    return result
}

console.log(selfDividingNumbers(1, 22))
