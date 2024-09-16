function findMinDifference(timePoints: string[]): number {
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }

  const minutesArray = timePoints.map(convertToMinutes)
  minutesArray.sort((a, b) => a - b)
  console.log(minutesArray)
  
  let minDifference = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < minutesArray.length; i++) {
    minDifference = Math.min(minDifference, minutesArray[i] - minutesArray[i - 1])
  }

  const circularDifference = 1440 - (minutesArray[minutesArray.length - 1] - minutesArray[0])
  minDifference = Math.min(minDifference, circularDifference)

  return minDifference
}

console.log(findMinDifference(["23:59","00:00"]))