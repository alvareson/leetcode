function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a)
    let output = 0
    for (let i = 0; i < k; i++) {
        const num = happiness[i] - i
        if (num > 0) output += num
        else break
    }
    return output
}

console.log(maximumHappinessSum([46,49,1], 3))