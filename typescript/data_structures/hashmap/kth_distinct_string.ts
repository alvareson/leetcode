function kthDistinct(arr: string[], k: number): string {
    const hashmap: Map<string, number> = new Map<string, number>()
    arr.forEach(word => hashmap.set(word, (hashmap.get(word) || 0) + 1))
    
    const distinctWords = arr.filter(word => hashmap.get(word) === 1)
    return (distinctWords.length === 0 || distinctWords.length < k) ? "" : distinctWords[k - 1]
}

console.log(kthDistinct(["d","b","c","b","c","a"], 2))


/*
A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr.
If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

Example
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 
*/