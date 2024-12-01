package main

import (
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	file, err := os.ReadFile("./day-1/input.txt")
	if err != nil {
		panic("Could not open file")
	}
	str := string(file)
	lines := strings.Split(str, "\n")
	var list1, list2 []int
	for _, line := range lines {
		items := strings.Split(line, "   ")
		num1, _ := strconv.Atoi(items[0])
		num2, _ := strconv.Atoi(items[1])
		list1 = append(list1, num1)
		list2 = append(list2, num2)
	}

	var sum int = 0
	sort.Ints(list1)
	sort.Ints(list2)
	for i := 0; i < len(list1); i++ {
		sum += int(math.Abs(float64(list1[i] - list2[i])))
	}
	fmt.Println(sum)
}
