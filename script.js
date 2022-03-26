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

function whoWins(cMove,pMove){

    let res;
    if((cMove == 'rock' && pMove == 'scissor') || (cMove == 'paper' && pMove == 'rock') || (cMove == 'scissor' && pMove == 'paper')){
        res = 1;
    }
    else if((pMove == 'rock' && cMove == 'scissor') || (pMove == 'paper' && cMove == 'rock') || (pMove == 'scissor' && cMove == 'paper')){
        res = 2;
    }
    else{
        res = 0;
    } 
    return res;
}

function game(_cScore,_pScore){

    for(let i=0;i<5;i++){

        let cMove = computerPlay();
        let pMove = playerSelection();
        console.log(play(cMove,pMove));

        if(whoWins(cMove, pMove) == 1){
            _cScore++;
        }
        else if(whoWins(cMove,pMove) == 2){
            _pScore++;
        }
        else{
            _cScore++;
            _pScore++;
        }
        
        console.log('Computer Score: '); console.log(_cScore);
        
        console.log('Your Score: '); console.log(_pScore);
    }
}

let _pScore = 0, _cScore = 0;

console.log(game(_cScore,_pScore));
