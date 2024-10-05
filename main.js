let timeleft=60;
let isPaused=true;
let timer;

const timerAct=document.getElementById('timer');
const startpause=document.getElementById('startpause');
const reset=document.getElementById('reset');
const root=document.querySelector(':root');
const icon=document.getElementById('play');

function timerShow(){
    const minute=Math.floor(timeleft/60);
    const second=timeleft%60;
    timerAct.innerHTML=`0${minute}:${second}`;
}

startpause.addEventListener('click',()=>{
    if (isPaused){
        isPaused=false;
        icon.classList.remove('fa-play')
        icon.classList.add('fa-pause');
        startpause.classList.toggle('color');
        timer=setInterval(()=>{
            if(timeleft>0){
                timeleft--;
                timerShow()
                root.style.setProperty('--degrees',circleDegree())
                }
            else{
                
                clearInterval(timer);
                
            }
        },1000)}
    else {
        isPaused=true;
        icon.classList.remove("fa-pause");
        icon.classList.add('fa-play');
        clearInterval(timer);
        startpause.classList.toggle('color');
        
    }})

reset.addEventListener('click',()=>{
    clearInterval(timer);
    timeleft=60;
    isPaused=true;
    icon.classList.remove("fa-pause");
    icon.classList.add('fa-play');
    root.style.setProperty('--degrees','0deg');
    startpause.classList.remove('color');
    timerShow();
})

function circleDegree(){
    return `${((60-timeleft)*6)}deg`;
}



