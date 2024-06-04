// async functions returns a promise

async function greet(){
    // throw "404 error not found" ;
    return "hello world"; // returns a promise
}


greet()
    .then((result)=>{
        console.log("promise was resolved");
        console.log(result);
    })

    .catch((err)=>{
        console.log("error: here's the error: ",err);
    });


let hello = async ()=> {
    return "hi"
}; // returns a promise