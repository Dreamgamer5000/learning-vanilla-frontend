let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random"
let url3 = "https://icanhazdadjoke.com";

// let p = document.createElement('p');

// fetch(url)
// .then((res)=>{
//     console.log("response : ",res);
//     return res.json();
// })
// .then((data1)=>{
//     console.log("data1: ",data1.fact);
//     p.innerText= `${data1.fact}`;
//     document.body.append(p);

// })
// .catch((err)=>{
//     console.log("error: ", err);
// });

// async function getcatFacts(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     }   
//     catch(err){
//         console.log(err);
//     }
// }

div = document.querySelector('div');
but = document.querySelectorAll('button');
img = document.querySelector('img');



async function getcatFactsaxios(){
    try {
        let res = await axios.get(url);
        console.log(res);
        return res.data.fact;
    }   
    catch(err){
        console.log(err);
        return "no fact found";
    }
}


async function getdogimagesaxios(){
    try {
        let res = await axios.get(url2);
        console.log(res);
        return res.data.message;
    }   
    catch(err){
        console.log(err);
        return "no fact found";
    }
}

but[0].addEventListener('click',async ()=>{
    p = document.createElement('p');
    p.innerText = await getcatFactsaxios();
    console.log(p);
    div.append(p)
})


but[1].addEventListener('click',async ()=>{
    let img_url = await getdogimagesaxios();
    img.setAttribute('src',img_url);
    console.log(img_url)
})



async function getDadJoke(){
    try{
        let config = {headers : {Accept : "application/json"}}
        let res = await axios.get(url3,config);
        console.log(res.data.joke);
        return res;
    }
    catch(err){
        console.log(err);
        return err;
        
    }
}

