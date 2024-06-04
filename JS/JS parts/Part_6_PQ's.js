// dice

function roll_a_dice() {
  console.log(`the die rolled : ${Math.floor(Math.random()*6 +1)}`)
}

//  Averae of three numbers
function average_of_3(a,b,c) {
  console.log(`average of ${a},${b},${c} is ${(a+b+c)/3}`)
  
}

// Multiplication Table
function multiplication_table(a){
  for(i=1; i<=20;i++) {
    console.log(`${a} times ${i} is ${a*i}`)
  }
}


// sum to n
function sum_to_n(n){
  let sum = 0
  for(let i=1;i<=n;i++){
    sum += i
  }
  return sum
}

// concatanation of strings 

let str = [ "hi", 'hello', "thsis", "!"]


function concat(a){
  let final_word = ""
  for(word of a){
    final_word  += word
    
  }
  return final_word
}


function greet() {
  console.log("hello")
}

function multiple_greet(func,count){
  for(let i=0;i<count;i++){
    func()
  }

}

// writing methods(functions inside objects)

calc = {
  add(a,b){
    return a+b;
  },
  sub(a,b){
    return a-b
  },
  mul(a,b){
    return a*b
  }
};



// Qs1. Write a JavaScript function that returns array elements larger than a number.

arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,272,85]

function num_larger_than(arr,int){
  console.log(arr)
  let new_arr = []
  for (num of arr){
    if (num > int)
      new_arr.push(num)

  }
  return new_arr
}

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

function getUnique(str){
  let unique = "";
  for(let i = 0; i<str.length;i++){
    if (unique.indexOf(str[i]) == -1){
      unique += str[i];
    }
  }
  return unique;
}

function getUnique2(string){
  unique = ""
  for(letter of string){
    if (unique.indexOf(letter) == -1) {
      unique += letter
    }
  }
  return unique
}

//Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] 
// output : "United States of America"


countries = ["Australia", "Germany fffffffffffffffffffffffffffffff", "United States of America"]
let len = 0
let longCountry

function Largest_country_name(country){
  for (country of countries) {
    if (country.length > len){
      len = country.length
      longCountry = country
    }

  }
  return longCountry
}

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

function count_vowel(string){
  vowels = [ 'a','e','i','o','u','A','E','I','O','U']
  count = 0
  for (vowel of vowels){
    for (letter of string){
      if (vowel == letter){
        count++
      }
    }
  }
  return count
}
  

// Qs5. Write a JavaScript function to generate a random number within a range (start, end).

function random_range(start,end){
  return Math.floor(Math.random() * (end-start)) + start
}