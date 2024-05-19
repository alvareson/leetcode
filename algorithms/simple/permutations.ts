const permute = (nums: number[]): number[][] => {
    const result: number[][] = []
    const myPermute = (start: number[], permutations: number[]) => {
        if (start.length === 0) {
            result.push([...permutations])
        } else {
            for (let i = 0; i < start.length; i++) {
                let dupe = [...start]
                let removed = dupe.splice(i, 1)[0]
                permutations.push(removed)
                myPermute(dupe, permutations)
                permutations.pop()
            }
        }
    }
    myPermute(nums, [])
    return result
}

console.log(permute([1,2,3]))
