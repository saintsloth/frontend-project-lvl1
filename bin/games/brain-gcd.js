#!/usr/bin/env node

import cli from '../cli.js';
import { getRandomInt, miniGame } from '../index.js';
import greeting from '../brain-games.js';

const game = (name) => {
  function getTrueAnswer(num1, num2) {
    const min = num1 > num2 ? num2 : num1;
    const max = num1 > num2 ? num1 : num2;
    let gcd = min * 1;
    for (let i = min * 1; i > 0; i -= 1) {
      if (min % gcd === 0 && max % gcd === 0) return gcd;
      gcd -= 1;
    }
    return 1;
  }

  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const question = `${num1} ${num2}`;
    const trueAnswer = `${getTrueAnswer(num1, num2)}`;
    if (miniGame(name, question, trueAnswer) === false) return;
  }
  console.log(`Congratulations, ${name}`);
};

greeting();
const name = cli();
game(name);
