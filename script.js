function computerPlay(){

    let chance = Math.floor(Math.random()*(3))+1;
    if(chance == 1)
        return 'rock';
    else if(chance == 2)
        return 'paper';
    else
        return 'scissor';
}

function playerSelection(){
    let pChance = prompt('Enter your choice:');
    return pChance.toLowerCase();
}

function play(cMove,pMove){

    let res;
    if((cMove == 'rock' && pMove == 'scissor') || (cMove == 'paper' && pMove == 'rock') || (cMove == 'scissor' && pMove == 'paper')){
        res = `You Lose! ${cMove} beats ${pMove}`;
    }
    else if((pMove == 'rock' && cMove == 'scissor') || (pMove == 'paper' && cMove == 'rock') || (pMove == 'scissor' && cMove == 'paper')){
        res = `You Won! ${pMove} beats ${cMove}`;
    } 
    else{
        res = `It's a tie, you both got ${cMove}`;
    } 
    return res;
}

let cMove = computerPlay();
let pMove = playerSelection();

console.log(play(cMove, pMove));
