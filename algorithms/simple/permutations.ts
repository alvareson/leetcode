const permute = (nums: number[]): number[][] => {
    return nums.flatMap((n) => {
        return permute(nums.filter(i => i !== n)).map(i => [n, ...i])
    })
}

console.log(permute([1,2,3]))
