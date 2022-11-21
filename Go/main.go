package main

import "fmt"

func main() {
   inc := increment()
   fmt.Println(inc())
   fmt.Println(inc())
   fmt.Println(inc())
   fmt.Println(inc())

   fmt.Println(increment2())
   fmt.Println(increment2())
   fmt.Println(increment2())
   fmt.Println(increment2())
   
}

func increment() func() int {
   count := 0
   return func() int {
      count++
      return count
   }
}

func increment2() int {
   count:= 0
   count++
   return count
}