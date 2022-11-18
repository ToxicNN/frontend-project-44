import * as fun from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (a, b) => {
  let answer;
  let i = a > b ? a : b;
  while (i > 0) {
    if (a % i === 0 && b % i === 0) {
      answer = i;
      break;
    }
    i -= 1;
  }
  return answer;
};

const rules = 'Find the greatest common divisor of given numbers.';
let correctAnswer;
let playerAnswer;
let givenNumberOne;
let givenNumberTwo;
let correctAnswers = 0;
let name;

const getNewRound = () => {
  givenNumberOne = getRandomNumber(1, 50);
  givenNumberTwo = getRandomNumber(1, 50);
  console.log(`Question: ${givenNumberOne} ${givenNumberTwo}`);
  correctAnswer = getGCD(givenNumberOne, givenNumberTwo);
  playerAnswer = fun.playerQuestion();
};

const brainGcd = () => {
  name = fun.playerGreetings();
  console.log(rules);
  while (correctAnswers < 3) {
    getNewRound();
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      break;
    }
  }
  fun.gameOver(correctAnswers, playerAnswer, correctAnswer, name);
};

export default brainGcd;