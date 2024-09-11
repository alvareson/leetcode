function minBitFlips(start: number, goal: number): number {
  return (start ^ goal).toString(2).split('0').join('').length
}

console.log(minBitFlips(10, 7))