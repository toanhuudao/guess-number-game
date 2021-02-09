'use strict';

// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.message').textContent = '🎉🎉🎉🎉 correct!';
// document.querySelector('.score').textContent = '100';
// document.querySelector('.number').textContent = '28';
//
// document.querySelector('.guess').value = 20;

const secretNumber = Math.trunc(Math.random() * 100 + 1);
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click', function() {
  if (score>0){
    const choiceNumber = Number(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = 'Choice !!!';
    if (!choiceNumber) {
      document.querySelector('.message').textContent = '⛔No Number Choice⛔';
    } else if (choiceNumber === secretNumber) {
      document.querySelector('.message').textContent = '🏆You WIN🏆';
      document.querySelector('body').style.backgroundColor='#60b347';
      document.querySelector('.number').innerHTML = `${secretNumber}`;
      document.querySelector('.number').style.width='20rem';

      if (highScore<score-1){
        highScore=score-1;
        document.querySelector('.highscore').textContent=`${highScore}`;
      }

    } else if (choiceNumber > secretNumber) {
      document.querySelector('.message').textContent = '👆🏼Too high👆🏼';
    } else if (choiceNumber < secretNumber) {
      document.querySelector('.message').textContent = '👇🏼Too low👇🏼';
    }
    score--;
    document.querySelector('.score').textContent = `${score}`;
  }
  else {
    document.querySelector('.message').textContent = '💥You Lose 💥';
  }
});

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor='black';
  document.querySelector('.guess').value ='';
  document.querySelector('.score').textContent ='20';
  score=20;


})
