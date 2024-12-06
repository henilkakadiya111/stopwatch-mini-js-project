let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');
let display=document.getElementById('display');
let msec=0,sec=0,min=0;
let id=null;
startbtn.addEventListener('click',()=>{
    if(id==null){
        id=setInterval(timer,10);
    }
})
stopbtn.addEventListener('click',()=>{
 clearInterval(id);
  id=null;
})
resetbtn.addEventListener('click',()=>{
    clearInterval(id);
    id=null;
    display.innerHTML=`00 : 00 : 00`
    msec=0,sec=0,min=0;
})

function timer(){
msec++;
if(msec==100){
    sec++;
    msec=0;
    if(sec==60){
        min++;
        sec=0;
    }
}
let msecstr=(msec<10)?`0${msec}`:msec;
let secstr=(sec<10)?`0${sec}`:sec;
let minstr=(min<10)?`0${min}`:min;
display.innerHTML=`${minstr} : ${secstr} : ${msecstr}`

}
