var seconds=0;
var minutes=0;
var hour=0;
var getTime=num=> num.toString().padStart(2,"0")
function handlestart(){
    interval=setInterval(()=>{
    //a=document.getElementById("count").innerHTML   
    seconds++
    
    if(seconds==60)
    {
        minutes++;
        seconds=0
    }
    if(minutes==60){
        hour++
        minutes=0;
        seconds=0
    }
    timer=document.getElementById("count").innerHTML
    document.getElementById("count").innerText=`${getTime(hour)}:${getTime(minutes)}:${getTime(seconds)}`
},100)
timer=document.getElementById("count").innerHTML
}


function handlestop(){
    clearInterval(interval)
}
function handlerestart(){    
    document.getElementById("count").innerHTML="00:00:00"
    seconds=0
    minutes=0
    clearInterval(interval)
}

function handleflag(){
    //time=parseInt(time+1).toString()
    //document.getElementById("time").innerHTML=document.getElementById("time").innerHTML+"\n"+timer
    document.getElementById("time").innerHTML=timer
}

