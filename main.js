const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

while (true) {
  const userAnswer = prompt('Guess the number from 1 to 100. Enter "exit" to exit the game.');
  if (userAnswer.toLowerCase() === 'exit') {
    break;
  }

  const userNumber = Number.parseInt(userAnswer, 10);
  if (Number.isNaN(userNumber)) {
    alert('You ddidn`t enter a number!');
    continue;
  }
  attempts++;
  if (userNumber > answer) {
    alert('Try taking a smaller number.');
  } else if (userNumber < answer) {
    alert('Try taking a bigger number.');
  } else {
    alert('Right! The number is guessed on ' + attempts + ' attempt.');
    break;
  }
}