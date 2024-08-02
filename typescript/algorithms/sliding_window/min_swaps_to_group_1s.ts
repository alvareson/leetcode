function minSwaps(nums: number[]): number {
    let countOnes = 0
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 1 && countOnes++
    }
    
    let maxOnesInWindow = 0
    let currentOnesInWindow = 0

    // count number of 1 in the first window of size countOnes
    for (let i = 0; i < countOnes; i++) {
        currentOnesInWindow += nums[i]
    }

    maxOnesInWindow = currentOnesInWindow

    // slide the window across the array
    for (let i = 1; i < nums.length; i++) {
        // rm element that is going out of the window and add the new element
        currentOnesInWindow = currentOnesInWindow - nums[i - 1] + nums[(i + countOnes - 1) % nums.length]
        maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesInWindow)
    }
    
    // minimum swaps - is the difference between countOnes and maxOnesInWindow
    return countOnes - maxOnesInWindow
}

console.log(minSwaps([1,1,0,0,1]))
