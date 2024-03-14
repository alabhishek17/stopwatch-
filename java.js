console.log("hello");
let timer=document.getElementById("timer");
let strbutton=document.getElementById("start");
let resetbutton=document.getElementById("reset");
let stopbutton=document.getElementById("stop");


let msec =00;
let sec =00;
let mins = 00;

let timerID=null;
strbutton.addEventListener('click',function(){
//  console.log("its");
if(timerID!==null){
    clearInterval(timerID);
}
   timerID = setInterval(startTime, 10);
});

stopbutton.addEventListener('click',function(){
    clearInterval(timerID);
});
resetbutton.addEventListener('click',function(){
    clearInterval(timerID);
    timer.innerText=`00:00:00`;
    msec=sec=mins=00;
});
function startTime(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            mins++;
        }
    }
    
    let mescString= msec<10 ?`0${msec}`:msec;
    let secString= msec<10 ?`0${msec}`:msec;
    let minsString= msec<10 ?`0${msec}`:msec;


    timer.innerHTML=`${ minsString}:${secString}:${mescString}`;
}