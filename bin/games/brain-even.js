#!/usr/bin/env node

import cli from '../cli.js';
import { getRandomInt, miniGame } from '../index.js';
import greeting from '../brain-games.js';

const even = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const trueAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (miniGame(name, question, trueAnswer) === false) return;
  }
  console.log(`Congratulations, ${name}`);
};

greeting();
const name = cli();
even(name);
