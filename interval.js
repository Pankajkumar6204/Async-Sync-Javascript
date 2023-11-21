// Generate random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()* 10 + 1)]
    }
    return color
}
// console.log(randomColor());

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 2000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
        document.body.style.color = 'white'
    }
};
// console.log(startChangingColor);

const stopChangingColor = function(){

    clearInterval(intervalId);
    intervalId = null;
};

start.addEventListener('click', startChangingColor);

stop.addEventListener('click', stopChangingColor);