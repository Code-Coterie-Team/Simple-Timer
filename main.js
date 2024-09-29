let timeleft=60;
let isPaused=true;
let timer;
const timerbtn=document.getElementById('txt');
const startpause=document.getElementById('startpause')
const reset=document.getElementById('reset')

const timerShow=()=>{
    const minute=Math.floor(timeleft/60);
    const second=timeleft%60;
    timerbtn.innerHTML=`${minute}:${second}`;
}


startpause.addEventListener('click',()=>{
    if (isPaused){
        isPaused=false;
        startpause.innerHTML='pause';
        timer=setInterval(()=>{
            if(timeleft>0){
                timeleft--;
                timerShow()
            }
            else{
                clearInterval(timer)
                startpause.disabled=true;
            }
        },1000)}
    else {
        isPaused=true;
        startpause.innerHTML='start';
        

    }

    }

)

reset.addEventListener('click',()=>{
    clearInterval(timer);
    timeleft=60;
    isPaused=true;
    startpause.disabled=false;
    startpause.textContent='start';
    timerShow();

})


