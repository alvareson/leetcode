function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const MOD = 10**9 + 7
    const subarraySums: number[] = []

    // create array
    for (let i = 0; i < n; i++) {
        let currentSum = 0
        for (let j = i; j < n; j++) {
            currentSum += nums[j]
            subarraySums.push(currentSum)
        }
    }

    // sort
    subarraySums.sort((a, b) => a - b)

    // calculate sum from left to right inclusive
    let resultSum = 0
    for (let k = left - 1; k < right; k++) {
        resultSum = (resultSum + subarraySums[k]) % MOD
    }
    
    return resultSum
}

console.log(rangeSum([1,2,3,4], 4, 1, 5));


/*
You are given the array nums consisting of n positive integers.
You computed the sum of all non-empty continuous subarrays from the array and then
sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

Return the sum of the numbers from index left to index right
(indexed from 1), inclusive, in the new array.
Since the answer can be a huge number return it modulo 109 + 7.

Example
Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13 
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4.
After sorting them in non-decreasing order we have
the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers
from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13.
*/