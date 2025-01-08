console.log('Stegen');

const diceNumbers = 6;
let totalThrowns = 0;
let doneDeal = false;

function getRandomInt(diceNumbers) {
    return Math.floor(Math.random() * diceNumbers);
}

while(!doneDeal) {
    console.log('hej');

    let diceThrown = getRandomInt(diceNumbers) ;

    if(diceThrown == 1) {
        console.log('yes');
    }
    console.log(diceThrown);
    debugger; //BREAK
}


