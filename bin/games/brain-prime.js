#!/usr/bin/env node

import cli from '../cli.js';
import { greeting, getRandomInt, miniGame } from '../index.js';

const game = (name) => {
  function getTrueAnswer(num) {
    let flag = true;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
    return flag ? 'yes' : 'no';
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt();
    const question = `${num}`;
    const trueAnswer = `${getTrueAnswer(num)}`;
    if (miniGame(name, question, trueAnswer) === false) return;
  }
  console.log(`Congratulations, ${name}`);
};

greeting();
const name = cli();
game(name);
