import readlineSync from 'readline-sync';

const cli = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('May I have your name? ');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);
  return name;
};

export default cli;
