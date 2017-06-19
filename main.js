function rockPaperScissors() {

	function compare() {

		function getCompChoice() {
			var randInt = Math.random() * 9;
			var num = Math.ceil(randInt);
			if (num < 4) {
				var compChoice = 'ROCK';
			}
			else if (num > 4 && num < 6) {
				var compChoice = 'PAPER';
			}
			else {
				compChoice = 'SCISSORS';
			}
			return compChoice.toUpperCase();
		}

		function getUserChoice() {
			var getInput = prompt('Please enter ROCK, PAPER, or SCISSORS');
			while (getInput.toUpperCase() !== 'ROCK' && getInput.toUpperCase() !== 'PAPER' && getInput.toUpperCase() !== 'SCISSORS') {
				var getInput = prompt('That command is not recognised. Please enter ROCK, PAPER, or SCISSORS');
			}
			var userChoice = getInput.toUpperCase();
			return userChoice;
		}

		var count = 0;
		var wins = 0;
		var losses = 0;
		while (count < 3 && wins < 2 && losses < 2) {
			var userChoice = getUserChoice();
			var compChoice = getCompChoice();
			if (userChoice == 'ROCK' && compChoice == 'SCISSORS') {
				alert('Rock smashes scissors! You win!');
				count += 1;
				wins += 1;
			}
			else if (userChoice == 'ROCK' && compChoice == 'PAPER') {
				alert('Paper covers rock! You lose!');
				count += 1;
				losses += 1;
			}
			else if (userChoice == 'PAPER' && compChoice == 'SCISSORS') {
				alert('Scissors cuts paper! You lose!');
				count += 1;
				losses += 1;
			}
			else if (userChoice == 'PAPER' && compChoice == 'ROCK') {
				alert('Paper covers rock! You win!');
				count += 1;
				wins += 1;
			}
			else if (userChoice == 'SCISSORS' && compChoice == 'ROCK') {
				alert('Rock smashes scissors! You lose');
				count += 1;
				losses += 1;
			}
			else if (userChoice == 'SCISSORS' && compChoice == 'PAPER') {
				alert('Scissors cuts paper! You win!');
				count += 1;
				wins += 1;
			}
			else {
				alert('The result is a tie!');
			}
		}
		if (wins > losses) {
			var reset = prompt('You win! :) Type YES to play again or anything else to exit.');
			if (reset.toUpperCase() == 'YES') {
				rockPaperScissors();
			}
			else {
				alert('Goodbye!');
			}
		}
		else {
			var reset = prompt('You lose :( Type YES to play again or anything else to exit.');
			if (reset.toUpperCase() == 'YES') {
				rockPaperScissors();
			}
			else {
				alert('Goodbye!');
			}
		}
	}
	compare();
}