function nameOfValue(play){
    if(play===0){
        return "ROCK"
    }else if(play===1){
        return "PAPER"
    }else{
        return "SCISSORS"
    }
}
function valueOfName(play){
    if(play==="ROCK"){
        return 0
    }else if(play==="PAPER"){
        return 1
    }else if(play=="SCISSORS"){
        return 2
    }else{
        return 3
    }
}
function computerPlay(){
    return Math.floor(Math.random()*3)
}
function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return 0
    }
    if(computerSelection%3+1 === playerSelection){
        return 1
    }else{
        return -1
    }
}
function game(){
    let score = 0
    let win = "win"
    let lose = "lose"
    let draw = "draw"
    let player = 0
    let computer = 0
    let verdict = win
    for(let i=0; i++; i < 5){
        computer = computerPlay
        do{
            (player)=valueOfName(toLocaleUppercase(prompt("Please enter your selection Rock, Paper or Scissors",null)))
        }while(player!=3)
        score+=playRound(player,computer)
        if(playRound(player,computer)===0){
            verdict = draw
        }else if(playRound(player,computer)===1){
            verdict = win
        }else{
            verdict = lose
        }
        console.log(`You $(verdict) the computer had $(nameOfValue(computer))`)
    }
    if(score>0){
        console.log("You've beaten the computer in the best of 5")
    }else{
        console.log("I'm sorry the computer has beaten you in the best of 5")
    }
}
game()