let gameSeq = [];
let userSeq = [];
let btnColors = ["yellow","blue","red","green"];

let isStarted = false;
let level = 0;

let container = document.querySelector('.container');
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let click = 0;

let allbtns = document.querySelectorAll('.box');

function levelup(){
    userSeq= [];
    level++;
    p.innerText = `level ${level}`;
    flash(randomButton());

}

function randomButton(){
    randomIndex = Math.floor(Math.random()*4 );
    color = btnColors[randomIndex];
    btn = document.querySelector(`.${color}`);
    gameSeq.push(color);
    return btn;

}

function flash(btn){
    btn.classList.add(`${btn.classList[0]}Flash`);
    setTimeout(function (){
        btn.classList.remove(`${btn.classList[0]}Flash`);
        },150)      

}

function screenFlash(){
    document.body.classList.add('screenFlash');
    setTimeout(function() {
        document.body.classList.remove('screenFlash');
    },350)
}

function checkAnswer(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,500);
        }
        

    } else{
        
        id = setInterval(screenFlash,400);
        setTimeout(()=>{
            clearInterval(id);
        },1200);

        console.log("Game Ended");
        h1.innerText = "GAME OVER";
        p.innerText = "press any box to start over";
        setTimeout(()=>{
            isStarted = false;
            gameSeq = [];
            userSeq = [];
            click = 0;
            level = 0;
        },1300);
        
        
    }

}

function btnpress(){
    
    click++
    if(click!=1){                  // neglects the first click
     
        flash(this);
        userSeq.push(this.classList[0]);
        checkAnswer(userSeq.length - 1);    
    }

}

// issue #1 : clicking on container box also starts the game
// issue #2 : make it so that it repeats the pattern again
// issue #3 : ad QOL to notice you have clicked
// issue #4 : game keeps flashing if clicked twice in a rows

container.addEventListener('click',function(event){
    if(isStarted == false){
        isStarted = true;
        h1.innerText = "SIMON SAY GAME";
        console.log("Game has Started")
        levelup();
    }
})


for(btn of allbtns){
    btn.addEventListener('click',btnpress);
    // btn.addEventListener('click',()=>{
    //     btn.classList.toggle("nocursor");
    //     setTimeout(function(){
    //         btn.classList.toggle("nocursor");
    //         console.log(btn)
    //     },200)
    // })

}


