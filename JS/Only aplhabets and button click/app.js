let but = document.querySelector("button");
let amt = document.querySelectorAll("p span");


let amount1 = 0;
but.addEventListener('mouseout',function (){
    amount1++;
    amt[0].innerHTML = amount1;
})

const colorNames = [
    "Aqua",
    "Black",
    "Blue",
    "Crimson",
    "DarkBlue",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOrange",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkTurquoise",
    "DeepPink",
    "DimGray",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "Goldenrod",
    "Gray",
    "Green",
    "GreenYellow",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    
]; 

let index =0;
but.addEventListener('click', function(){
    index = (index + 1) % colorNames.length;
    but.style.backgroundColor = colorNames[index++];
});


// isGreen = false;

// but.addEventListener('click', function(){
//     console.log("Iclicked");

//     if (isGreen){  
//         but.style.backgroundColor = 'limeGreen';
//         isGreen = false;
//     } else {
//         but.style.backgroundColor = 'red';
//         isGreen = true;
//     }



// })


let inp = document.querySelector('input');
let heading = document.querySelector('h2');

inp.addEventListener('input', function(){
    let newvalue = "";
    for(const char of inp.value){
        if((char>= 'a' &&char<='z') || (char>= 'A' && char<= 'Z')||(char == ' ')){ 
         //if (/^[a-zA-Z]+$/.test(char)) 
            newvalue += char;
        }else {
            alert("Not an alphabet")
        }
    }
    inp.value = newvalue
    heading.innerText =inp.value; 
});


