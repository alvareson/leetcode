const fillPrefixSum = (nums: number[]): number[] => {
  const prefixSum: number[] = []
  prefixSum[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i]
  }
  return prefixSum
}

const array: number[] = [5, 10, 30, 4, 5]
const prefixSumArray: number[] = fillPrefixSum(array)
console.log(prefixSumArray)