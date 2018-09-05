function nameOfValue(play) {
    if (play === 0) {
        return "ROCK"
    } else if (play === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
function playerSelection(play){
/*     const imageSelector = document.querySelectorAll('input');
    imageSelector.forEach((imageSelector) => {
        imageSelector.addEventListener('click', (e) => {
          console.log("Hmmmm");
            alert(imageSelector.id);
            return imageSelector.id
        });
      }); */
      return play;
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
    if (playerSelection === computerSelection) {
        return 0
    }
    if ((computerSelection + 1) % 3 === playerSelection) {
        return 1
    } else {
        return -1
    }
}
function game() {
    const buttons = document.querySelectorAll('button');
    let score = 0
    let win = "win"
    let lose = "lose"
    let draw = "draw"
    let player = button.id
    let computer = 0
    let verdict = win
    for (let i = 0; i < 5; i++) {
        computer = computerPlay()
        //const buttons = document.querySelectorAll('button');
        
        score += playRound(player, computer)

        if (playRound(player, computer) === 0) {
            verdict = draw
        } else if (playRound(player, computer) === 1) {
            verdict = win
        } else {
            verdict = lose
        }
        console.log(resultMessage(player, computer, verdict));

    }
    if (score > 0) {
        console.log("You've beaten the computer in the best of 5")
    } else {
        console.log("I'm sorry the computer has beaten you in the best of 5")
    }
}
function resultMessage(player, computer, verdict){
    return "You ${verdict}, you chose ${nameOfValue(player)} the computer chose ${nameofValue(computer)}"
}
game()