#!/usr/bin/env node

import cli from '../cli.js';
import { greeting, getRandomInt, miniGame } from '../index.js';

const game = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operatorArray = ['+', '-', '*'];
    const randomOperator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
    const question = `${num1} ${randomOperator} ${num2}`;
    const trueAnswer = `${eval(question)}`;
    if (miniGame(name, question, trueAnswer) === false) return;
  }
  console.log(`Congratulations, ${name}!`);
};

greeting();
const name = cli();
game(name);
