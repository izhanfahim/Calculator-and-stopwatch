var mints = document.getElementById("mints")
var sec = document.getElementById("sec")
var ms = document.getElementById("ms")

var millisec = 100;
var seconds = 60;
var minutes = 60;

var interval;

var btnplay = document.getElementById("btnplay")
var btnstop = document.getElementById("btnstop")
var btnres = document.getElementById("btnres")

function start (){
    interval = setInterval(startTime,10);
    btnplay.disabled = true
    
}

function startTime(){
    millisec--

    ms.innerHTML= millisec
  
    if(millisec == 0){
        seconds--
        sec.innerHTML = seconds

        millisec = 100
    }else if(seconds == 0){
        minutes--
        mints.innerHTML = minutes

        seconds =60
    }
}

function stop (){
    clearInterval(interval)
    btnplay.disabled =false
}



function reset(){
    stop()
    millisec = 100
    seconds = 60
    minutes = 60    

    ms.innerHTML = millisec
    sec.innerHTML = seconds
    mints.innerHTML = minutes
}