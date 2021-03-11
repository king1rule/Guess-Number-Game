'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //when the is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🆘 No number!';


        //when the player wins
    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = '🥳 Correct Number';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        //checking if the score is greater than highscore and then store that in highscore varible
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when the player has geuss a number high
    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High'
            score--;
            document.querySelector('.score').textContent = score;

        } 
        //when the player has geuss a number low

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low'
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('body').style.backgroundColor = '#FE2E64';

            document.querySelector('.score').textContent = 0;

        }

    }
});


//resetting the game when player clicks on the again button
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'

});    