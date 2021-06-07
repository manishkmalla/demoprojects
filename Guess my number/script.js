'use strict';

/*
console.log(document.querySelector('.message').textContent); //reads the text
document.querySelector('.message').textContent = 'Correct Number! ';//change the text
console.log(document.querySelector('.message').textContent); //reads the text

document.querySelector('.number').textContent =13;
document.querySelector('.score').textContent =30;



document.querySelector('.guess').value =23;
console.log (document.querySelector('.guess').value);
*/


let secretNumber  = Math.trunc(Math.random() * 20) + 1;
let  score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function (){
    const guess = Number (document.querySelector('.guess').value);
    console.log(typeof guess);

    //When there is no input  
    if (!guess) {
       //document.querySelector('.message').textContent = 'No number entered !';
       displayMessage('No Number entered !');
    
    //When Player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        //document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';



        //for highscore

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    //when guess is wrong
    }else if (guess != secretNumber){


        if (score > 1) {

            //document.querySelector('.message').textContent = guess > secretNumber ?'Too High!':'Too Low' ;

            displayMessage(guess > secretNumber ?'Too High!':'Too Low');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('You lost the game');
           // document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;

        }
           


    }
    
    
    // //when guess is high
    // else if (guess > secretNumber){

    //     if (score > 1) {

    //         document.querySelector('.message').textContent = 'Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;

    //     }
           


       
    // //When guess is less
    // } else if (guess < secretNumber) {


    //     if (score > 1) {

    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;

    //     }
           

    // }

});



document.querySelector('.again').addEventListener('click', function (){
    
    secretNumber  = Math.trunc(Math.random() * 20) + 1;
    score = '20';

    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');

    //document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

});

