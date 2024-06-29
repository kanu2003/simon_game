// initializing the array to store the game sequence and user sequence
let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"];

let started = false; //game is yet to start
let level = 0;

let h3 = document.querySelector("h3");

// press any key to start the game
document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
   
});

// function for flash button
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

// level up
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    // random color generate
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

// check if the user pressed correct color
function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game Over!! your Score was <b>${level}</b> <br><br>press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "#C40C0C";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },2000);
        reset();
    }
}
// button press effct on button for user
function btnpress() {
    let btn = this;
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click",btnpress);
}

// reset the game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
