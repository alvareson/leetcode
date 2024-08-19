function nthUglyNumber(n: number): number {
	let uglyNumbers = new Array(n).fill(0)
	uglyNumbers[0] = 1
	let p2 = 0
	let p3 = 0
	let p5 = 0
	for (let i = 1; i < n; i++) {
		uglyNumbers[i] = Math.min(uglyNumbers[p2] * 2, uglyNumbers[p3] * 3, uglyNumbers[p5] * 5)
		if (uglyNumbers[i] === uglyNumbers[p2] * 2) p2++
		if (uglyNumbers[i] === uglyNumbers[p3] * 3) p3++
		if (uglyNumbers[i] === uglyNumbers[p5] * 5) p5++
	}
	return uglyNumbers[n - 1]
}

console.log(nthUglyNumber(10))
