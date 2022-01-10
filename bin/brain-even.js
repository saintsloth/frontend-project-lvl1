#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min = 1, max = 100) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
};

const miniGame = (name) => {
  const num = getRandomInt();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const trueAnswer = num % 2 === 0 ? 'yes' : 'no';
  const boolean = answer === trueAnswer;
  if (boolean === false) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}`);
    return boolean;
  }
  console.log('Correct!');
  return boolean;
};

const even = (name = 'default Name') => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i = i + 1) {
    if (miniGame(name) === false) return;
  }
  console.log(`Congratulations, ${name}`);
};

export default even;
