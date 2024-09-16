function findMinDifference(timePoints: string[]): number {
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const minutesArray = timePoints.map(convertToMinutes)
  minutesArray.sort((a, b) => a - b)
  console.log(minutesArray)

  return 0
}

console.log(findMinDifference(["23:59","00:00"]))