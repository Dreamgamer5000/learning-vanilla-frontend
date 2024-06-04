let inp = document.querySelector('input');
let but = document.querySelector('button');
let ul = document.querySelector('ul');

function addNewList(){
    if (inp.value !== ""){
        let li = document.createElement('li');
        li.innerHTML = ` ${inp.value} <span class="material-symbols-outlined">close</span>` ;
        inp.value = "";
        ul.append(li);
    }else{
        alert("input empty")
    }
    
}

but.addEventListener('click',addNewList);
inp.addEventListener('keydown',function(event){
    if(event.key === "Enter"){
        addNewList();
    }
}); // add a feature that doesnt change onmouse click

let entireList = document.querySelector('ul');

entireList.addEventListener('click',function(event){
    if(event.target.nodeName == "SPAN"){
        event.target.parentElement.remove();
    }
})

// for (eachdel of del) {
//     eachdel.addEventListener('click',function() {          // doesn't apply to new elements
//         this.parentElement.remove()
//     })
// }
