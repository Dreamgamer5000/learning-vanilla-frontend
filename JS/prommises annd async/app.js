h1 = document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;

            if(num > 3){
                reject("rejected");
            }
            
            h1.classList.add(`${color}`);
            resolve();
        }, delay);

        
    });
}


// changeColor("red",1000)
// .then(()=>{
//     return changeColor("green",1000);
// })
// .then(()=>{
//     return changeColor("yellow",1000);
// })
// .then(()=>{
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     return changeColor("red",1000);
// })


// can be made shorter with async

async function changecolor5times(){
    try{
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("blue",1000);
    }

    catch(error){
        console.log("erroe caught: ",error);
    }

    let a = 5;
    console.log(a);
    }


changecolor5times();

