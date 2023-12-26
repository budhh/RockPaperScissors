// P/C (P-C)
//           P-R   S-R
//     R-P         S-P
//     R-S   P-S

// R=1 P=2 S=3
//           1   2
//     -1        1
//     -2   -1

// T W L
// L T W
// W L T

const gameMap = new Map([
	['ROCK', 1],
	['PAPER', 2],
	['SCISSORS', 3],
]);

function playRound(playerSelection, computerSelection) {
	const P = gameMap.get(playerSelection);
	const C = gameMap.get(computerSelection);
	console.log(P - C);
	if (P == C) {
		return 'TIE';
	} else if (P - C == 1 || P - C == -2) {
		return true;
	} else {
		return false;
	}
}

function getRandomChoice() {
	const max = 3;
	const min = 1;
	const result = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(result);
	switch (result) {
		case 1:
			return 'ROCK';
		case 2:
			return 'PAPER';
		case 3:
			return 'SCISSORS';
		default:
			break;
	}
}

function playerPrompt() {
	const pp = prompt('prompt for round ');
	console.log(pp);
	if (gameMap.has(pp) === false) {
		console.log('need proper prompt for round');
		location.reload();
		return false;
	} else {
		return pp;
	}
}

function game() {
	let scoreP = 0;
	let scoreC = 0;
	let roundnum = 0;
	for (let index = 0; index < 5; index++) {
		roundnum = index + 1;
		console.log('Round ' + roundnum);

		let playerSelection = playerPrompt();

		let round = playRound(playerSelection, getRandomChoice());

		if (round == true) {
			scoreP = scoreP + 1;
			console.log('Player Wins! Round: ' + roundnum);
		} else if (round == false) {
			scoreC = scoreC + 1;
			console.log('Computer Wins! Round: ' + roundnum);
		} else {
			console.log('Tie in Round: ' + roundnum);
		}
		console.log('P Score: ' + scoreP + ' ' + 'C Score: ' + scoreC);
	}

	if (scoreC < scoreP) {
		console.log(
			'player wins the match with a score of ' + scoreP + ' VS ' + scoreC
		);
	} else if (scoreC > scoreP) {
		console.log(
			'computer wins the match with a score of ' + scoreP + ' VS ' + scoreC
		);
	} else {
		console.log('TIE');
	}
}

game();
