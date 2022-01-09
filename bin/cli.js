import readlineSync from 'readline-sync';

let cli = () => {
	console.log('Welcome to the Brain Games!\n');
	console.log('May I have your name? ');
	console.log(`Hello, ${readlineSync.question('Your answer: ')}`);
}

export default cli
