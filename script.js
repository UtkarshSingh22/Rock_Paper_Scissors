function computerPlay(){

    let chance = Math.floor(Math.random()*(3))+1;
    if(chance == 1)
        return 'rock';
    else if(chance == 2)
        return 'paper';
    else
        return 'scissor';
}



console.log();

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

function game(e){

    let pChance = e.target.id;
    let chance = computerPlay();
    let res = play(chance, pChance);
    
    const div = document.createElement('div');
    div.className = 'result';
    let text = document.createTextNode(res);
    div.appendChild(text);

    const btnList = document.querySelector('.btns');
    btnList.appendChild(div);
}

const btns = document.querySelectorAll('button');

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click', game);
}






