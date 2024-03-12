let button1 = document.getElementById('customButton-start')
let button2 = document.getElementById('customButton-reset')
let timer = document.getElementById('time')
let lap = document.getElementById('lap')

let h = 0
let m = 0
let s = 0
let time
let pause = 0

function count(){
    s++
    if(s === 60){
        s = 0
        m++
        if(m === 60){
            m = 0
            h++
        }
    }
    timer.textContent = h.toString().padStart(2,'0')+':'+m.toString().padStart(2,'0')+':'+s.toString().padStart(2,'0')
}

function statr(){
    time = setInterval(count,10)
}

function reset(){
    if(pause === 0){
        clearInterval(time)
    }
    else{
        lap.textContent = ""
        clearInterval(time)
        timer.textContent = '00:00:00'
        h = 0
        m = 0
        s = 0
    }
}

function stop(){
    lap.innerHTML += '<p>'+timer.textContent+'</p>'
    clearInterval(time)
}

function runTimer(){
    if(button1.textContent === 'Start'){
        button1.textContent = "Stop"
        button1.style.setProperty("background-color","red")
        pause = 0
        statr()
    }
    else{
        button1.textContent = "Start"
        button1.style.setProperty("background-color","green")
        pause = 1
        stop()
    }
}

button1.addEventListener('click',runTimer)
button2.addEventListener('click',reset)