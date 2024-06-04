// Practise Question

// let msg = "     Help!         "
// let newMsg = msg.trim().toUpperCase()
// console.log(msg)
// console.log(newMsg)



// let namea = "ApnaCollege"
// console.log(namea.replace("l","t"),namea.slice(4).replace("l","t"))
// console.log(namea.replace("Apna", "Our"))



// let start = ["january","july", "march", "august"]
// start.splice(0,2,"july","june")
// console.log(start)


// let scripts = ["c","c++","HTML","javascript", "Python", "Java", "c#", "sql" ]
// console.log(scripts.indexOf("javascript"))
// console.log(scripts.reverse().indexOf("javascript"))



// Q1 Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]
//
// let n = prompt("Enter a numerical value to want stuff")
// let arr = [1,2,3,4,5,6,7,8,9,12,13,14,15,45,46,47,48,89]
// console.log(arr.slice(0,n))


// Q2 Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]
//
// let n = prompt("Enter a numerical value to want stuff")
// let arr = [1,2,3,4,5,6,7,8,9,12,13,14,15,45,46,47,48,89]
// console.log(arr.slice(-n))


// Q3 Write a JavaScript program to check whether a string is blank or not.
//
// let msg = prompt("Enter st")
// if (msg.trim() == "" ){           //msg.length == 0
//   console.log("its empty")
// } else {
//   console.log("I hear ya")
// }



// Q4 Write a JavaScript program to test whether the character at the given (character) index is lower case.
//
// let n = 9
// let word = "MynaMeISReJIt"
// if (word[n] == word[n].toLowerCase()) {
//   console.log("Its small")
//   console.log(word[n])

// } else {
//   console.log("Its BIG")
//   console.log(word[n])
// }



// Q5 Write a Javascript program to strip laiding and trailing white spaces from a string.
//trim



// Q6 Write a JavaScript program to check if an element exists in an array or not.
//
// alert("find st")
// let arr = ["hello", "we", "wow", "no"]
// let find = prompt("write here")
// if (arr.includes(find)) {                    // or use indexOf != -1
//   console.log("We Foundy")
// } else {
//   console.log("we couldnt")
// }