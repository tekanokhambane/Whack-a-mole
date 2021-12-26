const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSqaure(){
    square.forEach(className =>{
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    //asign the id of the randomPosition  to the hitposition  for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id =>{
    id.addEventListener('mouseup', () =>{
        if(id.id ===hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSqaure, 1000)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert('Game over! Your score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)