package main

import (
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

func main() {
	file, err := os.ReadFile("./day-2/input.txt")
	if err != nil {
		panic("Could not open file")
	}
	str := string(file)
	lines := strings.Split(str, "\n")
	safe := 0
	for _, line := range lines {
		items := strings.Split(line, " ")
		var nums []int
		for _, num := range items {
			num1, _ := strconv.Atoi(num)
			nums = append(nums, num1)
		}
		if (isIncreasing(nums) && diff(nums)) || (isDecreasing(nums) && diff(nums)) {
			safe++
		}

	}
	fmt.Print(safe)
}

func isIncreasing(data []int) bool {
	for i := 0; i < len(data)-1; i++ {
		if data[i] > data[i+1] {
			return false
		}
	}
	return true

}

func isDecreasing(data []int) bool {
	for i := 0; i < len(data)-1; i++ {
		if data[i] < data[i+1] {
			return false
		}
	}
	return true

}

func diff(data []int) bool {
	for i := 0; i < len(data)-1; i++ {
		if math.Abs(float64(data[i])-float64(data[i+1])) > 3 || data[i]-data[i+1] == 0 {
			return false
		}
	}
	return true

}
