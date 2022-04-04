function computerPlay(){

    let chance = Math.floor(Math.random()*(3))+1;
    if(chance == 1)
        return 'rock';
    else if(chance == 2)
        return 'paper';
    else
        return 'scissor';
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
/*
let _cScore = 0, _pScore = 0;

while(_pScore < 5 && _cScore < 5){
    let pChance = playerSelec();
    let chance = computerPlay();
    let res = play(chance, pChance);
    
    const div = document.createElement('div');
    div.className = 'result';
    let text = document.createTextNode(res);
    div.appendChild(text);

    const btnList = document.querySelector('.btns');
    btnList.appendChild(div);
}
*/


const btns = document.querySelector('button');

btns.addEventListener('click', startGame);

function startGame(e){

    const head = document.querySelector('.btns');
    head.removeChild(btns);

    const but1 = document.createElement('button');
    but1.id = 'rock';
    but1.setAttribute('onClick','getId(this.id)')
    but1.classList = 'butAdd';
    but1.textContent = 'ROCK';
    head.appendChild(but1);

    const but2 = document.createElement('button');
    but2.id = 'paper';
    but2.setAttribute('onClick','getId(this.id)')
    but2.classList = 'butAdd';
    but2.textContent = 'PAPER';
    head.appendChild(but2);

    const but3 = document.createElement('button');
    but3.id = 'scissor';
    but3.setAttribute('onClick','getId(this.id)')
    but3.classList = 'butAdd';
    but3.textContent = 'SCISSORS';
    head.appendChild(but3);

    //let pScore = 0, cScore = 0;
    //while(pScore < 5 && cScore < 5){

        const pSel = '';
        const press = document.querySelectorAll('.butAdd');
        for(let i=0;i<press.length;i++){
            press[i].addEventListener('click', getId);   
        }
        
        function getId(e){
            pSel = e.target.id;
            return pSel;
        }

        getId()

        console.log(pSel);
    //}


}




