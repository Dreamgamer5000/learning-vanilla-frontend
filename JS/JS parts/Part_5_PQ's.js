// Qs1. Create a program that generates a random number representing a dice roll. 
// [The number should be between 1 and 6]


function roll_a_dice() {
  console.log(`the die rolled : ${Math.floor(Math.random()*6 +1)}`)
}


// Qs2. Create an object representing a car that stores the following properties for the 
// car: name, model, color. 
// Print the car’s name.

function car() {
  let cars = { name: "Mercedes", model:"X12", color:"Lavender"}
  console.log(cars.name)
}


// Qs3. Create an object Person with their name, age and city. 
// Edit their city’s original value to change it to “New York”. 
// Add a new property country and set it to the United States.
function person() {
  let person = { name:"Rejit" , age: 18, city: "India"}
  person.city = "New York"
  person.country = "United states of america"
  console.log(person)

}
