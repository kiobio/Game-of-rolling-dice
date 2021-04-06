const roll = document.querySelector('.roll');
const dice = document.querySelector('.dice');
const score1 = document.querySelector('.score_one');
const points1 = document.querySelector('.body_one');
const end = document.querySelector('.end');
const score2 = document.querySelector('.score_two');
const points2 = document.querySelector('.body_two');
let player1OnTurn= false;

roll.addEventListener('click', function(){
    const numberDice = Math.floor(Math.random()*6) +1;
    dice.textContent =  numberDice;
    if(player1OnTurn === true){

    
    if(numberDice > 1){
                
        let currentScore1 = Number(score1.textContent);
        let newScore1 =  currentScore1 + numberDice;
        score1.textContent = newScore1;
    } else {
        score1.textContent = 0;
        player1OnTurn = false;
                
    }
} else {
    if(numberDice > 1){
        
    let currentScore2 = Number(score2.textContent);
    let newScore2 =  currentScore2 + numberDice;
      score2.textContent = newScore2;
} else {
    score2.textContent = 0;
    player1OnTurn = true;
            
}

}

    
})

end.addEventListener('click', function(){
   
   if(player1OnTurn === true){
    points1.textContent = Number(points1.textContent) + Number(score1.textContent);
    score1.textContent = 0;
    player1OnTurn = false;
    if(points1.textContent == 100){
        alert('player one wins')
    }
    
} else if(player1OnTurn === false){
    
    points2.textContent = Number(points2.textContent) + Number(score2.textContent);
   score2.textContent = 0;
   player1OnTurn = true;
   if(points2.textContent == 10){
       alert('player two wins')
   }
}
})






/*roll.addEventListener('click', function(){
    const numberDice = Math.floor(Math.random()*6) +1;
    dice.textContent =  numberDice;
    if(numberDice > 1 && player1OnTurn === false){
        
        let currentScore = Number(score1.textContent);
        let newScore =  currentScore + numberDice;
          score2.textContent = newScore;
    } else {
        score2.textContent = 0;
        player1OnTurn = true;
                
    }

    
})*/

/*end.addEventListener('click', function(){
   points2.textContent = Number(score2.textContent);
   score2.textContent = 0;
   if(player1OnTurn === false){
       player1OnTurn = true;
   } else {
       player1OnTurn = false;
   }
})*/









/*function changePlayer(){
    if(player1OnTurn === true){
   

    player1OnTurn = false     
    } else if (player1OnTurn === false ){
        player1OnTurn = true;
    }
}*/