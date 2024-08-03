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


/*
You are given two integer arrays of equal length target and arr.
In one step, you can select any non-empty subarray of arr and reverse it.
You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.

Example
Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true

Explanation: You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
*/