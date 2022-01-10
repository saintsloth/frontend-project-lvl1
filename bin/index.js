import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!\n');

export const getRandomInt = (min = 1, max = 100) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
};

export const miniGame = (name, question, trueAnswer) => {
  console.log(`\nQuestion: ${question}\n`);
  const answer = readlineSync.question('Your answer: ');
  const boolean = answer === trueAnswer;
  if (boolean === false) {
    console.log(`\nd'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\n\nLet's try again, ${name}`);
    return boolean;
  }
  console.log('\nCorrect!');
  return boolean;
};
