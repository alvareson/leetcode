function maxDistance(arrays: number[][]): number {
	let minValue = arrays[0][0]
	let maxValue = arrays[0][arrays[0].length - 1]
	let maxDistance = 0

	if (arrays.length === 2 && arrays[0].length === 1 && arrays[1].length === 1) {
		return Math.abs(arrays[0][0] - arrays[1][0])
	}
	
	
	for (let arrayIndex = 1; arrayIndex < arrays.length; arrayIndex++) {
		let distFromMax = Math.abs(arrays[arrayIndex][0] - maxValue)
		let distFromMin = Math.abs(arrays[arrayIndex][arrays[arrayIndex].length - 1] - minValue)
		if (distFromMax > maxDistance) {
			maxDistance = distFromMax
		}
		if (distFromMin > maxDistance) {
			maxDistance = distFromMin
		}
		minValue = Math.min(minValue, arrays[arrayIndex][0])
		maxValue = Math.max(maxValue, arrays[arrayIndex][arrays[arrayIndex].length - 1])
	}
	
	return maxDistance
}

console.log(maxDistance([[1,4,5],[0,2]]))

/*
1.
init variables:
minValue: first el of first array
maxValue: last el of first array
maxDistance: init as zero
2.
iterate through arrays starting from 2nd:
	for each array, need to check two distances:
	distance between the first element of the current array and the current maxValue
	distance between the last element of the current array and the current minValue.

	update maxDistance: update maxmaxDistance by assign max from distFromMax or distFromMin.
	update minValue to be minimum between minValue and current array first element
	update maxValue to be maximum between maxValue and current array last element

return maxDistance
*/
