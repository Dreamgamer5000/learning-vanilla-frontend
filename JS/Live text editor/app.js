let inp = document.querySelector('input');
let p = document.querySelector('p');

inp.addEventListener('input',()=>{
    p.innerText = inp.value;
})