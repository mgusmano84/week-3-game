var wins = 0;
var losses = 0;
var guessesLeft= 9;
var guessesSoFar= [];
var choices = ["a ", "b ", "c ", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	guessesSoFar.push(userGuess);

	var computerGuess = choices[Math.floor(Math.random() * choices.length)];

	if (userGuess == computerGuess) {
	wins++;}

	else if (userGuess != computerGuess) {guessesLeft--;
	}

	if (guessesLeft == 0) {losses++; guessesLeft = 9; guessesSoFar = [];}




	var html = "<h1>The Psychic Game</h1>" +
		"<p>Guess what letter i'm thinking of: </p>" +
		"<p>Wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" +
		"<p>Guesses Left: " +
		guessesLeft +
		"</p>" +
		"<p>Your Guesses So Far: " +
		guessesSoFar +
		"</p>";

	
		document.querySelector('#game').innerHTML = html;	
}



