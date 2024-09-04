function robotSim(commands: number[], obstacles: number[][]): number {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let x = 0, y = 0
  let directionIndex = 0
  let maxDistanceSquared = 0

  const obstacleSet = new Set<string>()
  for (let [x, y] of obstacles) {
    obstacleSet.add(`${x},${y}`)
  }

  for (let command of commands) {
    if (command === -2) {
      directionIndex = (directionIndex + 3) % 4
    } else if (command === -1) {
      directionIndex = (directionIndex + 1) % 4
    } else {
      const [dx, dy] = directions[directionIndex]
      for (let step = 0; step < command; step++) {
        const newX = x + dx
        const newY = y + dy
        if (obstacleSet.has(`${newX},${newY}`)) {
          break
        }
        x = newX
        y = newY
        maxDistanceSquared = Math.max(maxDistanceSquared, x * x + y * y)
      }
    }
  }

  return maxDistanceSquared
}

console.log(robotSim([4,-1,4,-2,4], [[2,4]]))