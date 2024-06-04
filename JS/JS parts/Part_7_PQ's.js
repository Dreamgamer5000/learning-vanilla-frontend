// const cube = a => (a*a*a)
// const mul = (a,b) => (a*b)

// // using set interval set timeout and clear interval

// function set() {
//   setTimeout( () => {
//     console.log("Apna")
//   }, 4000)

//   console.log("welcome to")

//   let id = setInterval(() => {
//     console.log("Apna college")
//   }, 1000);

//   setTimeout(() => { 
//     clearInterval(id)
//   }, 10000);

// }
 

// const square = n => (n*n)


// function hello_5() {
//   let id = setInterval(() => {
//     console.log("hello World")
//   }, 2000);

//   setTimeout(() => {
//     clearInterval(id)
//   }, 10000);
  
// }

// // write  an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

// const arrayAverage = (arr) => {
//   total = 0
//   for(element of arr){
//     total += element
//   }
//   return total/3
// }


// // Write an arrow function named isEeven() that takes a single number as arguement and returns if it is even or not

// const isEven = a => {
//   if (a%2 == 0){
//     console.log("Its even")
//   } else {
//     console.log("Its Odd")
//   }
// }

// const object = {
//   message: "hwlo World!",
//   logmessage() {
//     console.log(this.message)
//   }
// }
// // object.logmessage()

// // setTimeout(object.logmessage,2000)
 

// let length = 4
// function callback() {
//   console.log(this.length)
// }

// const object1 = {
//   length : 5,
//   method(callback){
//     callback()
//   }
// }

// // object1.method(callback,1,2)



const student= {
  name:"Rejit",
  age:19,
  eng:78,
  math:58,
  cpp:94,
  getavg() {
    let avg = (this.eng + this.math + this.cpp)/3;
    console.log(`${this.name} got avg marks as ${avg}`);
  }
}


function testing(){
  
  console.log("ehllo wrold");
  console.log("aghfja");
  try{
  console.log("ehllo wrold");
  console.log("aghfja");
  } catch(r){
    console.log(r);
  }
}

function takestime(){
  console.log('Hi');

  setTimeout(()=> {
    console.log("Rejit");
  },5000)

  console.log("My name is ");
}


function hello5(){
  let id1 = setInterval(()=>{
    console.log("Hello world");
  },2000)

  setTimeout(()=>{
    clearInterval(id1);
  },10000)
}



// let length=4;
// function callback(){console.log(this.length);
// }

// const object={
//   length:5,
//   method(callback){
//     callback();
//   },
// };

// object.method(callback,1,2);