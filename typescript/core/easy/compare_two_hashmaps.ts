function canBeEqual(target: number[], arr: number[]): boolean {
    const hashmapArr: Map<number, number> = new Map<number, number>()
    const hashmapTarget: Map<number, number> = new Map<number, number>()
    arr.forEach(num => {
        hashmapArr.set(num, (hashmapArr.get(num) || 0) + 1)
    })
    target.forEach(num => {
        hashmapTarget.set(num, (hashmapTarget.get(num) || 0) + 1)
    })

    if (hashmapTarget.size !== hashmapArr.size) {
        return false
    }

    for (const [key, value] of hashmapTarget) {
        if (hashmapArr.get(key) !== value) {
            return false
        }
    }
    
    return true
}

console.log(canBeEqual([3,7,9], [3,7,11]));
