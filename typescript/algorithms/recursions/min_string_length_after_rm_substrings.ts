function minLength(s: string): number {
  let initlettersArray: string[] = s.split("")

  function checkAndSpliceOperation(arr: string[]): string[] {
    let wasOperation = false
    let stuck = ""

    for (let i = 0; i < arr.length; i++) {
      stuck += arr[i]
      if (stuck === "A") {
        if (arr[i + 1] && arr[i + 1] === "B") {
          arr.splice(i, 2)
          wasOperation = true
          break
        }
      } else if (stuck === "C") {
        if (arr[i + 1] && arr[i + 1] === "D") {
          arr.splice(i, 2)
          wasOperation = true
          break
        }
      }
      stuck = ""
    }

    return wasOperation ? checkAndSpliceOperation(arr) : arr
  }

  const answerArray = checkAndSpliceOperation(initlettersArray)
  return answerArray.length
}

console.log(minLength("ABFCACDB"))