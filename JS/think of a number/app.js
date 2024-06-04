let inp = document.querySelector('input');
let p = document.querySelector('p');
let but = document.querySelector('button');

but.addEventListener('click',function(){
    p.innerText = `You are thinking of the number ${inp.value}`;
})
