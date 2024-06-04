let para = document.createElement('p');
para.innerText = "Hey, I am Red";
para.classList.add('red');  

let body  = document.querySelector('body');
body.append(para);


let heading3 = document.createElement("h3");
heading3.innerText = "I'm a Blue H3";
heading3.classList.add('blue')
body.append(heading3);

let box = document.createElement("div");
box.classList.add('box');

body.append(box);


let heading1 = document.createElement("h1");
let para2 = document.createElement("p");

para2.innerText = "Me Too !";
heading1.innerText = "I am in a div";


box.append(para2);
box.prepend(heading1);


let button = document.createElement("button");
button.innerText = "Click ME !!";

let input = document.createElement("input");
input.placeholder = "Username";

button.setAttribute('id','btn');

div2 = document.createElement("div");
body.append(div2);
div2.classList.add('box');

div2.append(button);
div2.prepend(input);

// button = document.querySelector('#btn');

let anotherh1 = document.createElement('h1');
body.insertAdjacentElement('afterbegin',anotherh1);
anotherh1.innerText = "DOM PRACTICE";

let para3 = document.createElement("p");
para3.innerHTML = "Apna College <b> DELTA </b> Practice";

div2.append(para3);


