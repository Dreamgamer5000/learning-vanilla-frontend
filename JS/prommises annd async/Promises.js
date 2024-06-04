//call stack and break points

// js is single threaded and cannot do multiple stuff at once

// hence do a async nature

//callback h3ll

function savetoDB_callbackhell(data,success,failure){
    let internetspeed = Math.floor(Math.random()*10) +1;
    if (internetspeed > 4){
        success();
    } else{
        failure();
    }
}

savetoDB_callbackhell(
    "Data",
    ()=>{
        console.log("Success1:  Your data was saved");
        savetoDB_callbackhell(
            "hello world",
            ()=>{
                console.log("success2: your data was saved");
            },
            ()=>{
                console.log("failure2: data failed again");
            }
        );
    },
    ()=>{
        console.log("failure1: data was not saved");
    }
);



function savetoDb(data){
    return new Promise((resolve,reject) => {
        let internetspeed = Math.floor(Math.random()*10) +1;
        if (internetspeed > 4){
            resolve("data saved");
        } else{
            reject("cannot save");
        }
    });  
}

savetoDb("data")
    .then((result)=>{
        console.log(`result ${result}`)
        console.log("data1 : saved");
        return savetoDb("hello world");
    })
    .then((result)=>{
        console.log(`result ${result}`)
        console.log("data2: saved");
        return savetoDb("shradda");
    })
    .then((result)=>{
        console.log(`result ${result}`)
        console.log("data3: saved")
    })
    .catch((error)=>{
        console.log(`result ${error}`)
        console.log("Failed");
    });

