package main

import (
	"fmt"
	"sort"
)

type Interval struct {
	start int
	end   int
}

type MyCalendar struct {
	bookings []Interval
}

func Constructor() MyCalendar {
	return MyCalendar{
		bookings: []Interval{},
	}
}

func (mc *MyCalendar) Book(start int, end int) bool {
	newInterval := Interval{start: start, end: end}

	// binary search
	index := sort.Search(len(mc.bookings), func(i int) bool {
		return mc.bookings[i].start >= newInterval.start
	})

	// check overlap with prev booking
	if index > 0 && mc.bookings[index-1].end > newInterval.start {
		return false
	}

	// check overlap with next booking
	if index < len(mc.bookings) && mc.bookings[index].start < newInterval.end {
		return false
	}

	// insert the new interval
	// append a zero value to increase the slice size by one
	mc.bookings = append(mc.bookings, Interval{})
	// shift elements to make space for the new interval
	copy(mc.bookings[index+1:], mc.bookings[index:])
	// insert
	mc.bookings[index] = newInterval

	return true
}

func main() {
	myCalendar := Constructor()
	fmt.Println(myCalendar.Book(10, 20))
	fmt.Println(myCalendar.Book(15, 25))
	fmt.Println(myCalendar.Book(20, 30))
	fmt.Printf("%v\n", myCalendar)
}
