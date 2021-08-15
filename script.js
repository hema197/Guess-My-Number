'use strict';

const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const guessNumber = document.querySelector('.guess');
const scoreBox = document.querySelector('.score');
const highScoreBox = document.querySelector('.highscore');
const number = document.querySelector('.number');
const showMessage = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message => {
  showMessage.textContent = message;
}

againButton.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreBox.textContent = 20;
  guessNumber.removeAttribute('disabled');
  guessNumber.value = '';
  number.textContent = '?';
  displayMessage('Give it a shot, go guess!');
  document.querySelector('body').style.backgroundColor = 'green';
  number.style.width = '15rem';
})

checkButton.addEventListener('click', () => {
  const guessedNumber= Number(guessNumber.value);
  let score = Number(scoreBox.textContent);

  //when there is no number
  if(!guessNumber.value){
    displayMessage('⛔️ No number!');
    return;
  }
  //When number is too high
  if(guessedNumber> secretNumber && score> 1 ){
    scoreBox.textContent = score - 1;
    displayMessage('Too high!');
  }

  //When number is too low
  if(guessedNumber < secretNumber && score > 1){
    score--;
    scoreBox.textContent = score;
    displayMessage('Too low!')
  }

  if(guessedNumber!== secretNumber && score === 1){
  displayMessage('💥 You lost the game!')
  document.querySelector('body').style.backgroundColor= 'black';
  guessNumber.setAttribute('disabled', true);
  checkButton.removeEventListener('click', this);
  return;
  }
  
  if(guessedNumber === secretNumber){
    score++;
    scoreBox.textContent = score;
    number.textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    if(highScoreBox.textContent < score){
      highScoreBox.textContent = score;
    }
    document.querySelector('body').style.backgroundColor = 'orange';
    number.style.width = '30rem';
  }
})

