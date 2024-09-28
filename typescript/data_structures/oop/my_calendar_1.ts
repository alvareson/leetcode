class MyCalendar {
  private bookings: number[][]
  constructor() {
    this.bookings = []
  }

  book(start: number, end: number): boolean {
    // binary search to find correct insertion index
    let left = 0
    let right = this.bookings.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (this.bookings[mid][0] < start) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    // check overlap with prev booking
    if (left > 0 && this.bookings[left - 1][1] > start) {
      return false
    }
    // check overlap with next booking
    if (left < this.bookings.length && this.bookings[left][0] < end) {
      return false
    }

    this.bookings.splice(left, 0, [start, end])
    return true
  }
}

/**
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/
const myCalendar = new MyCalendar()
console.log(myCalendar.book(10, 20))
console.log(myCalendar.book(15, 25))
console.log(myCalendar.book(20, 30))
console.log(myCalendar)