import readlineSync from 'readline-sync';

const cli = () => {
  console.log('May I have your name?\n');
  const name = readlineSync.question('Your answer: ');
  console.log(`\nHello, ${name}\n`);
  return name;
};

export default cli;
