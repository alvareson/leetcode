/**
 * Given an integer array nums that does not contain any zeros,
 * find the largest positive integer k such that -k also exists in the array.
 * Return the positive integer k. If there is no such integer, return -1.
*/

function findMaxK(nums: number[]): number {
    const hashmap: Map<number, boolean> = new Map<number, boolean>()
    nums.forEach(num => hashmap.set(num, true))
    let largestK: number = -1
    nums.forEach(num => {
        if (hashmap.has(-num) && num > 0) {
            largestK = Math.max(largestK, num)
        }
    })
    return largestK
}
