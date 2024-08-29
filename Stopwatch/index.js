
let intervId = null
let seconds = 0;
let hours = 0;
let minutes = 0;


// Função para dar play no Stopwatch e cálculos para formatar os minutos, segundos e horas.
function play(){
    if (intervId === null){
        intervId = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = seconds % 60;
            }
            if (minutes >= 60) {
                hours++;
                minutes = minutes % 60;
            }
            document.getElementById('Stopwatch').textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`;
            
        }, 1000);
    }
}

// Função para fazer o reset do Stopwatch.
function reset(){
    clearInterval(intervId);
    intervId = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('Stopwatch').textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`;
}

// Função para pausar o Stopwatch.
function stop(){
    clearInterval(intervId);
    intervId = null;
}
