function nameOfValue(play) {
    if (play === 0) {
        return "ROCK"
    } else if (play === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
function playerSelection(){
    const imageSelector = document.querySelectorAll('image');
    imageSelector.forEach((imageSelector) => {
        imageSelector.addEventListener('click', (e) => {
          alert(image.id);
        });
      });
}
function valueOfName(play) {
    if (play === "ROCK") {
        return 0
    } else if (play === "PAPER") {
        return 1
    } else if (play == "SCISSORS") {
        return 2
    } else {
        return 3
    }
}
function computerPlay() {
    return Math.floor(Math.random() * 3)
}
function playRound(playerSelection, computerSelection) {
    //console.log(`MOD of Comp ${(computerSelection+1)%3}, ${playerSelection}`)
    if (playerSelection === computerSelection) {
        //console.log(`DRAW SELECTED ${playerSelection},${computerSelection},0`)
        return 0
    }
    if ((computerSelection + 1) % 3 === playerSelection) {
        //console.log(`WIN SELECTED ${playerSelection},${computerSelection},1`)
        return 1
    } else {
        //console.log(`LOSS SELECTED ${playerSelection},${computerSelection},-1`)
        return -1
    }
}
function game() {
    const images = document.querySelectorAll('image');
    let score = 0
    let win = "win"
    let lose = "lose"
    let draw = "draw"
    let player = 3
    let computer = 0
    let verdict = win
    for (let i = 0; i < 5; i++) {
        computer = computerPlay()
        do {
            (player) = valueOfName(prompt("Please enter your selection Rock, Paper or Scissors", "").toLocaleUpperCase())
        } while (player == 3)

        score += playRound(player, computer)


        if (playRound(player, computer) === 0) {
            verdict = draw
        } else if (playRound(player, computer) === 1) {
            verdict = win
        } else {
            verdict = lose
        }
        //console.log(`You ${verdict} the computer had ${nameOfValue(computer)} and you had ${nameOfValue(player)}`)
    }
    if (score > 0) {
        //console.log("You've beaten the computer in the best of 5")
    } else {
        //console.log("I'm sorry the computer has beaten you in the best of 5")
    }
}
//game()
playerSelection();