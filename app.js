let gameSeq=[];
let userSeq=[];
let btns=[`red`,`yellow`,`green`,`purple`];

let started=false;
let level=0;
let h2=document.querySelector(`h2`);

document.addEventListener(`keypress`,function(){
   if(started==false){
    console.log(`game started`);
    started=true;
    levelUp();
   }
})

function buttonFlash(btn){
btn.classList.add("flash");
setTimeout(function (){
   btn.classList.remove("flash")
},250);
}

function levelUp(){
   level++;
   h2.innerText=`Level ${level}`
   let randomBtn=document.querySelector(`#${btns[Math.floor(Math.random() *4)]}`);
   buttonFlash(randomBtn);
   gameSeq.push(randomBtn.id)

}

function btnPressed(){
  let btn=this;
   buttonFlash(btn);
  userSeq.push(`${btn.id}`)
  checkAnswer();
}

let allBtns=document.querySelectorAll(`.btn`);
for(btn of allBtns){
   btn.addEventListener(`click`,btnPressed);
}

function checkAnswer(){
   let idx=level-1;
   let count=0;
   for(let i=0;i<gameSeq.length;i++){
      if(userSeq[i]==gameSeq[i]){
         count++;
      }
   }
   if(count==gameSeq.length){
      levelUp()
      userSeq=[];
      btnPressed();
      checkAnswer();
   }else if(count!=gameSeq.length && userSeq.length==gameSeq.length) {
      h2.innerText=`Game over. Press any key to restart. Your score was ${level}`
      reset();
   }
}

function reset(){
   started = false;
   gameSeq=[];
   userSeq=[];
   level = 0;
} 