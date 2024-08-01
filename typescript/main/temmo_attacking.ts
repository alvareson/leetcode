function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if (timeSeries.length === 0) return 0
    let totalDuration = 0

    for (let i = 0; i < timeSeries.length - 1; i++) {
        let timeUntilNextAttack = timeSeries[i + 1] - timeSeries[i]
        totalDuration += Math.min(timeUntilNextAttack, duration)
    }

    totalDuration += duration
    return totalDuration
}

console.log(findPoisonedDuration([1, 2], 2));


