let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let hScore = 0;
let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function () {
    if(started == false){
       
        started = true;
        levelUp();  
    }
    
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },150);
};
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIndex = Math.floor(Math.random() * 4) ;
    let ranColor = btns[ranIndex];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
};
function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML = `Game over ! Your score is <b>${level}</b>. Press any key to start again.`;
        trackHighest();
        h3.innerText = `Your highest score is ${hScore}!`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor = "white";
        },100);
        reset();
    }
};  
function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

};  
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
};
function trackHighest() {
    let score = gameSeq.length;
    if(score > hScore) {
        hScore = score;
    }

    
};