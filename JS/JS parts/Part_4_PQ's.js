// for ( let i = 1; i<=100; i+=2) {
//   console.log(i)                               //ALL odd numbers
// }

// for ( let i = 0; i<=100; i+=2) {
//   console.log(i)                              // ALL even numbers
// }

//Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2 
// Result should be arr = [1, 3, 4, 5, 6, 3]

function del_occurance_of_num() {
  let arr = [1, 2, 3, 4, 5, 6, 2, 3]
  num = 5 
  console.log(`Before deleting ${num} :: ${arr}`)

  for(i=0;i<arr.length;i++){
    if (arr[i] == num) {
      arr.splice(i,1)
    }
  }

  console.log(`After deleting ${num} :: ${arr}`)
}

// Qs2. Write a JS program to find the no of digits in a number. 
// Example : if number = 287152, count = 6

function no_of_digits() {
  let number = prompt("Enter number to recieve count of digits")
  i =0
  while (i != number.length) {
    i++
  }
  console.log( `number of digits is ${i}`)
}



// Qs3. Write a JS program to find the sum of digits in a number. 
// Example : if number = 287152, sum = 25

function sum_of_digits() {
  let number = prompt("Enter number to find sum of")
  sum = 0
  for (digit of number){                                      // while loop 
    sum += parseInt(digit)                                    // digit = copy%10; sum += digit
    console.log(sum)                                           // number = Math.floor(copy/10)
  } 
  console.log(`Final sum ${sum}`)
}


// Qs4. Print the factorial of a number n. 
// [Factorial of a number n is the product of all positive integers less than or equal to a 
// given positive integer and denoted by that integer. ] 
// Example : 
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040 
// 5! (factorial of 5) = 1x2x3x4x5 = 120 
// 3! (factorial of 3) = 1x2x3 = 6 
// 0! Is always 1

function factorial() {
  let number = prompt("Enter number to find factorial of")
  fact = 1
  if (number == 0) {
    console.log("Factorial of zero is : 1")
  } else {
    for (i=1;i<=number;i++) {
      fact *= i
    }
    console.log(`factorial of ${number} is ${fact}`)
  }
}



// Qs5. Find the largest number in an array with only positive numbers.

function find_largest_in_array() {
  let arr = [19, 2, 3, 4, 5, 6, 2, 3,13,14,15,16,17]
  let largest = arr[0]
  for (number of arr) {
    if (largest < number){
      largest = number
    } 
  }
  console.log(`arrray is ${arr}`)
  console.log(`Largest number is  ${largest}`)
}
