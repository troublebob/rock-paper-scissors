function computerPlay() {
    return Math.floor(Math.random() * 3)
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0
    }
    if ((computerSelection + 1) % 3 === playerSelection) {
        return 1
    } else {
        return -1
    }
}
function nameOfValue(play) {
    if (play === 0) {
        return "ROCK"
    } else if (play === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
function resultMessage(player, computer, verdict){
    return "You "+ verdict +" you chose " + nameOfValue(player) + " the computer chose " + nameOfValue(computer);
}
const buttons = document.querySelectorAll('button');
let score = 0
let verdict =""
let computer = 0
let player = 0
let playerScore = 0
let computerScore = 0
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    player=parseInt(button.id);
    computer = computerPlay()  
    
    //score += playRound(player, computer)

    if (playRound(player, computer) === 0) {
        verdict = "draw"
    } else if (playRound(player, computer) === 1) {
        verdict = "win"
        document.querySelector('#playerScore').textContent = ++playerScore;
    } else {
        verdict = "lose"
        document.querySelector('#computerScore').textContent = ++computerScore;
    }
    const container=document.querySelector('#container');
    const result=document.createElement('h2');
    result.textContent = resultMessage(player, computer, verdict);
    container.appendChild(result);
    if(playerScore===5){
        while (container.firstChild) {
            conatiner.removeChild(container.firstChild);
        }
        result.textContent = "You have won the race to 5"
        container.appendChild(result);
        playerScore = 0
        computerScore = 0
    } else if (computerScore===5){
        while (container.firstChild) {
            conatiner.removeChild(container.firstChild);
        }
        result.textContent = "You have lost the race to 5"
        container.appendChild(result);
        playerScore = 0
        computerScore = 0
    }
    
  });
});
