function numMagicSquaresInside(grid: number[][]): number {
	const isMagicSquare = (r: number, c: number): boolean => {
		const s = new Set<number>()

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				const num = grid[r + i][c + j]
				if (num < 1 || num > 9 || s.has(num)) {
					return false
				}
				s.add(num)
			}
		}

		const rowSum1 = grid[r][c] + grid[r][c + 1] + grid[r][c + 2]
		const rowSum2 = grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2]
		const rowSum3 = grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2]
		
		const colSum1 = grid[r][c] + grid[r + 1][c] + grid[r + 2][c]
		const colSum2 = grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1]
		const colSum3 = grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2]
		
		const diagSum1 = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2]
		const diagSum2 = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c]
		
		return rowSum1 === 15 && rowSum2 === 15 && rowSum3 === 15 &&
			colSum1 === 15 && colSum2 === 15 && colSum3 === 15 &&
			diagSum1 === 15 && diagSum2 === 15
	}

	let count = 0

	for (let r = 0; r <= grid.length - 3; r++) {
		for (let c = 0; c <= grid[0].length - 3; c++) {
			if (isMagicSquare(r, c)) {
					count++
			}
		}
	}

	return count
}

console.log(numMagicSquaresInside([[4,3,8,4],[9,5,1,9],[2,7,6,2]]))
