const body = document.querySelector('body');

const randomColor = function(){
    const hexColor = '123456789ABCDEFGHIJ'
    let color = '#';
    for(let i=0; i<6; i++){
        color += hexColor[Math.floor(Math.random() * 10 +1)]
    }
    return color
}
randomColor()
console.log(randomColor());

const startChangingColor = function(){}
startChangingColor()

function changeBgColor(){
    body.style.backgroundColor = randomColor()
    body.style.color = 'white'
}

const starts = document.getElementById('start')
starts.addEventListener('click', function(){
    setInterval(changeBgColor, 1000)
})

