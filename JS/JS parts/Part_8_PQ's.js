// arr = [1,2,3,4,5]

// arr.forEach(function(el){
//   return el
// })

// let math = arr.map( (num) => {
//   return num*num;
// })


// let even = arr.filter( (num) => {
//   return (num % 2 == 0);
// })

 another_arr = [ 1,2,3,4,6,32,6,7,8,23,6,2,78];

// let maximun = another_arr.reduce((max,el) => {
//   if(el > max){
//     return el;
//   } else {
//     return max;
//   }
// })

// console.log(maximun)


// console.log(another_arr);
// sorted_array = [];
// for(let  i = 0; i < another_arr.length-1 ;i++){

//   for(let j= i+1; j < another_arr.length; j ++){
//     if( another_arr[i]>another_arr[j]){
//       const temp = another_arr[i];
//       another_arr[i] = another_arr[j];
//       another_arr[j] = temp;
//   }
// }
// }

// let minimum = another_arr.reduce((min,el) => {
//   if(el < min){
//     return el;
//   } else {
//     return min;
//   }
// })
// console.log(minimum);



// ar10 = [10,20,30,40,78];

// let check = ar10.every((el)=>{
//   return (el % 10 == 0);
// })

// console.log(check);

another_arr.forEach((el)=>{
  sum = 0
  sum += el*el;
  sum = sum / another_arr.length;
})

let near = another_arr.map((el)=> {
  return el + 5;
  
})

console.log(another_arr);
console.log(near);

let string = "My name Is Reijti";

let funcarray = [];
function doubleAndReturnArgs(array,...args){
  
}

const object1 = {
 name: "rejit",
 age: 12,
 designation: "student"
};

const object2 = {
  othername: "random guy",
  otherage: 25,
  otherdesignation: "not a studet"
};



function objectmerger(ob1, ob2){
  return {...ob1,...ob2};
  
}

const object3 = objectmerger(object1,object2);

console.log(object3);



console.log("rejit".toUpperCase)
