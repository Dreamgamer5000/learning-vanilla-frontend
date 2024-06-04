let btn = document.querySelector('button');
let div;
let p = document.querySelector('p')

let sheet = document.styleSheets[0];
for (i=0;i<sheet.cssRules.length;i++){
    if(sheet.cssRules[i].selectorText === 'div'){ // make changes within the css style sheet
        div = sheet.cssRules[i];
    }
}


btn.addEventListener('click',function(){
    let randomColor = getRandomColor();
    p.innerText = randomColor
    div.style.setProperty('background',randomColor);
    })

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    

    color = `rgb(${red},${green},${blue})`;

    return color;
}


