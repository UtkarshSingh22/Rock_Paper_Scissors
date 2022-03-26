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
