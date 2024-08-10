function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    const result: number[][] = []
    const visited = new Set<string>()
    const directions = [
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
        [-1, 0]  // up
    ]
    let currentDirection = 0
    let steps = 1
    let r = rStart
    let c = cStart

    while (result.length < rows * cols) {
        for (let i = 0; i < steps; i++) {
            if (r >= 0 && r < rows && c >= 0 && c < cols && !visited.has(`${r},${c}`)) {
                result.push([r, c])
                visited.add(`${r},${c}`)
            }
            r += directions[currentDirection][0]
            c += directions[currentDirection][1]
        }

        currentDirection = (currentDirection + 1) % 4

        if (currentDirection === 0 || currentDirection === 2) {
            steps++
        }
    }

    return result
}

console.log(spiralMatrixIII(5, 6, 1, 4))
