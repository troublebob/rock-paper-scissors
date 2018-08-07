function computerPlay(){
    play=Math.floor(Math.random()*3)
    if(play===0){
        return "ROCK"
    }else if(play===1){
        return "PAPER"
    }else{
        return "SCISSORS"
    }
}
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLocaleUpperCase()
    if(playerSelection===computerSelection){
        return "This round was a tie"
    }
    if(playerSelection==="ROCK"){
        if(computerSelection==="PAPER"){
            return "You lose Paper beats Rock"
        }else{
            return "You win Rock beats Scissors"
        }
    }else if(playerSelection==="PAPER"){

    }else{

    }
}