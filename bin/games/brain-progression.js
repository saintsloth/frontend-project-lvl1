#!/usr/bin/env node

import cli from '../cli.js';
import { greeting, getRandomInt, miniGame } from '../index.js';

const game = (name) => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const arrayLength = getRandomInt(5, 10);
    let arrayFirstNum = 1;
    const array = [arrayFirstNum];
    const arrayShift = getRandomInt(1, 10);
    for (let ii = 1; ii < arrayLength; ii += 1) {
      arrayFirstNum += arrayShift;
      array.push(arrayFirstNum);
    }
    const numOfHiddenNum = getRandomInt(2, arrayLength);
    const question = `${array.slice(0, numOfHiddenNum - 1)} .. ${array.slice(numOfHiddenNum)}`;
    const trueAnswer = `${array[numOfHiddenNum - 1]}`;
    if (miniGame(name, question, trueAnswer) === false) return;
  }
  console.log(`\nCongratulations, ${name}`);
};

greeting();
const name = cli();
game(name);
