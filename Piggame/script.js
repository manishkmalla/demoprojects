'use strict';

// Selecting elements\

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');// can be done 2 ways
const score1El = document.getElementById('score--1');// both the code does the same

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const winbanner = document.querySelector('.winner-banner');


//Starting condition
score0El.textContent = 0; //give initial value to 0
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;//cannot be inside the function below
let activePlayer = 0;
let playing = true;


//switch to next player
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;  
    activePlayer = activePlayer === 0 ? 1: 0;        
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click',function(){

    if(playing){
     //1. Generating a random dice roll
     const dice = Math.trunc(Math.random() * 6) + 1;

     //2. Display dice
     diceEl.classList.remove('hidden');
     diceEl.src = `dice-${dice}.png`;
     
 
     //3.Check for rolled 1: if true, switch to next player
     if(dice !== 1){
         //Add dice to the current score
         //currentScore = currentScore + dice;
         currentScore += dice;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;   
 
     }else{
         //switch to next player
         switchPlayer();
 
     }

    }
   

});

btnHold.addEventListener('click',function(){
   if (playing) {

   
    //1. add current score to active player's main score

    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
 
    //2. Check if player's score is >=100
    if (scores[activePlayer] >= 20) {
        // Finish the game
        playing = false;
        diceEl.classList.add('hidden');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');

        if(activePlayer == 0){
            console.log([activePlayer]);
            console.log('winner is mithra');
            
            prompt('Mithra is winner');
            winbanner.textContent ='Winner is Mithra';
            winbanner.classlist.remove('hidden');
        }else{
            winbanner.textContent ='Winner is Mithra';
            winbanner.classlist.remove('hidden');
            prompt('Malla is winner');
        }


      } else {
        // Switch to the next player
        switchPlayer();
      }
    
    //Switch the player
    }
   

});

//Reset button
