package main

import (
	"fmt"
)

type Interval struct {
	start int
	end   int
}

type MyCalendarTwo struct {
	bookings []Interval
	overlaps []Interval
}

func Constructor() MyCalendarTwo {
	return MyCalendarTwo{
		bookings: []Interval{},
		overlaps: []Interval{},
	}
}

func (this *MyCalendarTwo) Book(start int, end int) bool {
	newInterval := Interval{start: start, end: end}

	for _, overlap := range this.overlaps {
		if overlap.start < newInterval.end && overlap.end > newInterval.start {
			return false
		}
	}

	for _, booking := range this.bookings {
		if booking.start < newInterval.end && booking.end > newInterval.start {
			this.overlaps = append(this.overlaps, Interval{
				start: max(booking.start, newInterval.start),
				end:   min(booking.end, newInterval.end),
			})
		}
	}

	this.bookings = append(this.bookings, newInterval)
	return true
}

func main() {
	myCalendar2 := Constructor()
	fmt.Println(myCalendar2.Book(10, 20))
	fmt.Println(myCalendar2.Book(15, 25))
	fmt.Println(myCalendar2.Book(20, 30))
	fmt.Println(myCalendar2.Book(5, 15))
	fmt.Println(myCalendar2.Book(8, 12))
	fmt.Printf("%v\n", myCalendar2)
}
