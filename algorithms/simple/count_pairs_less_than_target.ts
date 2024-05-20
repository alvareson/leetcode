function countPairs(nums: number[], target: number): number {
    let count: number = 0
    const sortedNums: number[] = nums.sort((a: number, b: number) => {
        return a - b
    })
    for (let i = 0; i < sortedNums.length; i++) {
        for (let j = i + 1; j < sortedNums.length; j++) {
            if (sortedNums[i] + sortedNums[j] < target) {
                console.log(sortedNums[i], sortedNums[j])
                count++
            } else {
                break
            }
        }
    }
    return count
}

console.log(countPairs([-6,2,5,-2,-7,-1,3], -2))
