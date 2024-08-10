function regionsBySlashes(grid: string[]): number {
    const n = grid.length
    const parent: number[] = []
    
    // union-Find structure
    const find = (x: number): number => {
        if (parent[x] !== x) parent[x] = find(parent[x])
        return parent[x]
    }

    const union = (x: number, y: number): void => {
        parent[find(x)] = find(y)
    }

    // in a grid of size n x n, there are 4 regions per square
    const size = n * n * 4
    for (let i = 0; i < size; i++) {
        parent.push(i)
    }

    // traverse the grid and union regions
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const base = 4 * (i * n + j)
            const char = grid[i][j]

            // union the regions within the square
            if (char === '/') {
                union(base, base + 3)
                union(base + 1, base + 2)
            } else if (char === '\\') {
                union(base, base + 1)
                union(base + 2, base + 3)
            } else {
                union(base, base + 1)
                union(base + 1, base + 2)
                union(base + 2, base + 3)
            }

            // union with the right square
            if (j + 1 < n) {
                union(base + 1, base + 4 + 3)
            }

            // union with the bottom square
            if (i + 1 < n) {
                union(base + 2, base + 4 * n)
            }
        }
    }

    let regions = 0
    for (let i = 0; i < size; i++) {
        if (find(i) === i) {
            regions++
        }
    }

    return regions
}

console.log(regionsBySlashes([" /","/ "]))
