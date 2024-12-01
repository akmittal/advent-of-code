package main

import (
	"fmt"
	"os"
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
	mapping := make(map[int]int)
	for i := 0; i < len(list2); i++ {
		mapping[list2[i]] += 1
	}

	for i := 0; i < len(list1); i++ {
		sum += list1[i] * mapping[list1[i]]
	}
	fmt.Println(sum)
}
