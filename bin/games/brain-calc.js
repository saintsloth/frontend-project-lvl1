#!/usr/bin/env node

import cli from '../cli.js';
import { getRandomInt, miniGame } from '../index.js';
import greeting from '../brain-games.js';

const calc = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operatorArray = ['+', '-', '*'];
    const randomOperator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
    const question = `${num1} ${randomOperator} ${num2}`;
    const trueAnswer = `${eval(question)}`;
    if (miniGame(name, question, trueAnswer) === false) return;
  }
  console.log(`Congratulations, ${name}`);
};

greeting();
const name = cli();
calc(name);
