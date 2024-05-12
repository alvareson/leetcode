function largestLocal(grid: number[][]): number[][] {
    let n = grid.length
    let result: number[][] = []
    
    // Define i and j as centers of the cells
    for (let i = 1; i < n - 1; i++) {
        let row: number[] = []
        for (let j = 1; j < n - 1; j++) {
            let max = -Infinity
            console.log(`i is equal to ${i} and j is equal to ${j}`)
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    console.log(`x is ${x} and y is ${y}, value is ${grid[x][y]}`)
                    max = Math.max(max, grid[x][y])
                }
            }
            row.push(max)
        }
        console.log(`Row is equal to ${row}`)
        result.push(row)
    }
    return result
}

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))
