let timeleft=60;
let isPaused=true;
let timer;
const timerbtn=document.getElementById('timer');
const startpause=document.getElementById('startpause')
const reset=document.getElementById('reset')
const root=document.querySelector(':root');

function timerShow(){
    const minute=Math.floor(timeleft/60);
    const second=timeleft%60;
    timerbtn.innerHTML=`${minute}:${second}`;
}

startpause.addEventListener('click',()=>{
    if (isPaused){
        isPaused=false;
        startpause.classList.toggle('color');
        timer=setInterval(()=>{
            if(timeleft>0){
                timeleft--;
                timerShow()
                root.style.setProperty('--degrees',circleDegree())
                }
            else{
                startpause.disabled=true;
                clearInterval(timer);
                startpause.textContent='';
                
            }
        },1000)}
    else {
        isPaused=true;
        startpause.textContent='';
        clearInterval(timer);
        startpause.classList.toggle('color');
        
    }})

reset.addEventListener('click',()=>{
    clearInterval(timer);
    timeleft=60;
    isPaused=true;
    startpause.textContent='';
    root.style.setProperty('--degrees','0deg');
    startpause.classList.remove('color');
    timerShow();
})

function circleDegree(){
    return `${0+((60-timeleft)*6)}deg`;
}
timerShow();


