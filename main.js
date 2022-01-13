const selectors = document.querySelectorAll(".btn");
const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const winnerName = document.querySelector('#winner')
const userScoreContainer = document.querySelector('#user-score')
const compScoreContainer = document.querySelector('#comp-score')
const messageContainer = document.querySelector('#display-message')
const compChoice = document.querySelector('#computer-choice')
const userChoice = document.querySelector('#user-choice')
const userChoiceDisplayer = document.querySelector('#user-choice-displayer')
const choiceSelector = document.querySelectorAll('.choice-selector')
const maxRound = 0
let numOfRounds = 0
let userScore = 0
let compScore = 0

choiceSelector.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.cursor = 'grab'
    })
})

choiceSelector.forEach(element => {
    element.addEventListener("click", () => {
        playGame()
    })
})

function playThousandRounds() {
    let i = 0
    while (i < 1000) {
        const randomNumber = Math.floor(Math.random() * 3)
        playGame(randomNumber)
        i++;
    }
}



function playGame() {
    if (!(numOfRounds < maxRound)) {
        let name = document.querySelector("#name").value
        const target = event.target
        const randomNumber = Math.floor(Math.random() * 3)
        const userInput = target.attributes[0].value
        const outcome = findWinner(userInput, randomNumber)
        displayComputerChoice(parseInt(userInput), userChoice)
        displayComputerChoice(randomNumber, compChoice)
        displayMessage(outcome)
        displayScore(userScore, compScore)
        displayUserName(name)
        // console.log(numOfRounds)
        if (userScore > compScore) {
            if (name == null || name == '') {
                name = "User"
            }
            winnerName.textContent = name
        } else if (userScore < compScore) {
            winnerName.textContent = 'Computer'
        }
        numOfRounds++
    } else {
        window.alert("Out of clicks")
    }
}

function displayUserName(name) {
    if (name === "" || typeof(name) !== 'string') {
        userChoiceDisplayer.textContent = "User"
    } else {
        userChoiceDisplayer.textContent = `${name}'s`
    }
}


function displayName() {
    const name = document.querySelector("#name").value
    const usernameContainer = document.querySelector('#nameDisplay')
    
    usernameContainer.textContent = `${name}'s Score`
}


function findWinner(userInput, randomNumber) {
    if (userInput == randomNumber) {
        return 'draw'
    } else if (userInput == 0 && randomNumber == 1) {
        userScore++
        return 'win'
    } else if (userInput == 0 && randomNumber == 2) {
        compScore++
        return 'lose'
    } else if (userInput == 1 && randomNumber == 0) {
        compScore++
        return 'lose'
    } else if (userInput == 1 && randomNumber == 2) {
        userScore++
        return 'win'
    } else if (userInput == 2 && randomNumber == 1) {
        compScore++
        return 'lose'
    } else if (userInput == 2 && randomNumber == 0) {
        userScore++
        return 'win'
    }
}

function displayScore(userScore, compScore) {
    userScoreContainer.textContent = userScore
    compScoreContainer.textContent = compScore
}

function displayComputerChoice(num, player) {
    switch (num) {
        case 0:
            player.src = "Rock Paper Scissor Icon/Paper.png"
            break
        case 1:
            player.src = "Rock Paper Scissor Icon/Rock 2.jpg" 
            break
        case 2:
            player.src = "Rock Paper Scissor Icon/Scissor.jpg"
            break

    }
}

function displayMessage(message) {
    messageContainer.style.display = 'inline'
    if (message == 'draw') {
        messageContainer.textContent = 'Draw'
    } else if (message == 'win' || message == 'lose') {
        messageContainer.textContent = `You ${message}!`
    } 
}
