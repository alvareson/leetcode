function canArrange(arr: number[], k: number): boolean {
  const reminders = new Array(k).fill(0)

  // Calculate frequency of each remainder
  arr.forEach(num => {
    let reminder = (num % k + k) % k
    reminders[reminder]++
  })

  // Check if the count of elements with remainder 0 is even
  if (reminders[0] % 2 !== 0) return false

  // Check the rest of the remainders
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i === k - i) {
      // Special case when i is exactly k / 2 (for even k)
      if (reminders[i] % 2 !== 0) return false
    } else if (reminders[i] !== reminders[k - i]) {
      return false
    }
  }
  
  return true
}

console.log(canArrange([1,2,3,4,5,10,6,7,8,9], 5))