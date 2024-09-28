class MyCalendarTwo {
  private bookings: [number, number][]
  private overlaps: [number, number][] // store double booked intervals

  constructor() {
    this.bookings = []
    this.overlaps = []
  }

  book(start: number, end: number): boolean {
    // 1) check if overlap any double booking
    for (const [overlapStart, overlapEnd] of this.overlaps) {
      if (Math.max(start, overlapStart) < Math.min(end, overlapEnd)) {
          // return if overlap
          return false
      }
    }

    // 2) check where the new event overlaps with the single bookings
    for (const [bookingStart, bookingEnd] of this.bookings) {
      if (Math.max(start, bookingStart) < Math.min(end, bookingEnd)) {
        const overlapStart = Math.max(start, bookingStart)
        const overlapEnd = Math.min(end, bookingEnd)
        this.overlaps.push([overlapStart, overlapEnd])
      }
    }

    // 3) add the new booking
    this.bookings.push([start, end])
    return true
  }
}

/**
* Your MyCalendarTwo object will be instantiated and called as such:
* var obj = new MyCalendarTwo()
* var param_1 = obj.book(start,end)
*/
const myCalendarTwo = new MyCalendarTwo()
console.log(myCalendarTwo.book(10, 20))
console.log(myCalendarTwo.book(50, 60))
console.log(myCalendarTwo.book(10, 40))
console.log(myCalendarTwo.book(5, 15))
console.log(myCalendarTwo)