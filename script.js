let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playGame(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
       roundWinner = 'tie'
    }
    if (
       (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
       (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
       (playerChoice === 'PAPER' && computerChoice === 'ROCK')
    ){
       playerScore++
       roundWinner = 'player'
    }
    if (
       (computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
       (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
       (computerChoice === 'PAPER' && playerChoice === 'ROCK')
    ){
       computerChoice++
       roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner,playerChoice,computerChoice)
}

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}


function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerChoice) {
    if (isGameOver()) {
        setFinalMessage()
      return
    }
  
    const computerChoice = getComputerChoice()
    playGame(playerChoice, computerChoice)
    updateChoices(playerChoice, computerChoice)
    updateScore()
  
    if (isGameOver()) {
      setFinalMessage()
    }
  }

  function updateChoices(playerChoice, computerChoice) {
    switch (playerChoice) {
      case 'ROCK':
        playerSign.textContent = '✊'
        break
      case 'PAPER':
        playerSign.textContent = '✋'
        break
      case 'SCISSORS':
        playerSign.textContent = '✌'
        break
    }
  
    switch (computerChoice) {
      case 'ROCK':
        computerSign.textContent = '✊'
        break
      case 'PAPER':
        computerSign.textContent = '✋'
        break
      case 'SCISSORS':
        computerSign.textContent = '✌'
        break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
      scoreMessage.textContent = `${playerChoice} beats ${computerChoice}`
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${playerChoice} is beaten by ${computerChoice}`
      return
    }
  
    scoreMessage.textContent = `${playerChoice} ties with ${computerChoice}`
}

function setFinalMessage() {
    return playerScore > computerScore
      ? (textContent = 'You won!')
      : (textContent = 'You lost...')
  }
  