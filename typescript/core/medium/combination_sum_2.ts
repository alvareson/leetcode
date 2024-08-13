function combinationSum2(candidates: number[], target: number): number[][] {
  const sortedArray = sort(candidates)
  let result: number[][] = []
  let currentCombination: number[] = []
  
  backtrack(sortedArray, target, 0, currentCombination, result)

  return result
}

const sort = (arr: number[]): number[] => {
  return arr.sort((a, b) => a - b)
}

const backtrack = (candidates: number[], target: number, startIndex: number, currentCombination: number[], result: number[][]): void => {
  if (target === 0) {
    result.push([...currentCombination])
    return
  }

  for (let i = startIndex; i < candidates.length; i++) {
    if (i > startIndex && candidates[i] === candidates[i - 1]) {
      continue
    }

    if (candidates[i] > target) {
      break
    }

    currentCombination.push(candidates[i])

    backtrack(candidates, target - candidates[i], i + 1, currentCombination, result)

    currentCombination.pop()
  }
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8)) // [[1,1,6],[1,2,5],[1,7],[2,6]]
