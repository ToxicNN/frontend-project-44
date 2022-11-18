import run from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const operator = operators[randomIndex];
  return operator;
};

const operation = (a, operator, b) => [a, operator, b];

const getCorrectAnswer = (example) => {
  let correctAnswer;
  switch (example[1]) {
    case '+':
      correctAnswer = example[0] + example[2];
      break;
    case '-':
      correctAnswer = example[0] - example[2];
      break;
    default:
      correctAnswer = example[0] * example[2];
  }
  return correctAnswer;
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const example = operation(getRandomNumber(1, 50), getRandomOperator(), getRandomNumber(1, 50));
    items.push(`Question: ${example[0]} ${example[1]} ${example[2]}`);
    items.push(getCorrectAnswer(example));
    rounds.push(items);
  }
  return rounds;
};

const brainCalc = () => {
  run(rules, getNewRounds());
};

export default brainCalc;