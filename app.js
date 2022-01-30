
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var  scores,roundScore,activePlayer,gameplaying,diceDOM;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){
        //1.random number
       var dice = Math.floor(Math.random() * 6 ) + 1;

       //2.display the result
        diceDOM = document.querySelector('.dice');
       diceDOM.style.display = 'block';
      // diceDOM.style.border = 'solid black';
       diceDOM.src ='dice-' + dice +'.png';
   
       //3.update the round score if the rolled number was not a 1
       if(dice!==1)
       {
           //add score
           diceDOM.style.border = '15px solid blue';
           roundScore += dice;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
   
       }else{
        diceDOM.style.border = '15px solid red';
       nextplayer();

    }
    }
 

});

document.querySelector('.btn-hold').addEventListener('click', function(){
if(gameplaying){//add current score to global score 
   scores[activePlayer] += roundScore;



// update the user interface
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//check if the player won the game
}
if(scores[activePlayer] >= 100){
    document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';    
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active');
    gameplaying = false;
} else{
    //nextplayer
    
nextplayer();


}
}
);
function nextplayer(){
   document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
   activePlayer++;
    activePlayer === 4 ? (activePlayer = 0) : (activePlayer = activePlayer);
    roundScore = 0;

  
      


    

    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';
    document.getElementById('current-2').textContent ='0';
    document.getElementById('current-3').textContent ='0';
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active');
    



    


    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0,0,0];
    roundScore = 0;
    activePlayer= 0;
    gameplaying = true;
 
       
    
    document.querySelector('.dice').style.display ='none';
 //make all zero
document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('score-2').textContent ='0';
document.getElementById('score-3').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';
document.getElementById('current-2').textContent ='0';
document.getElementById("current-3").textContent ='0';
document.getElementById('name-0').textContent ='player 1';
document.getElementById('name-1').textContent ='player 2';
document.getElementById('name-2').textContent ='player 3';
document.getElementById('name-3').textContent ='player 4';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-2-panel').classList.remove('winner');
document.querySelector('.player-3-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-2-panel').classList.remove('active');
document.querySelector('.player-3-panel').classList.remove('active');
//document.querySelector('.player-0-panel').classList.remove('active');





    }
























