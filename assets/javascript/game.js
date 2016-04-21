


$(document).ready(function(){

//setting vars

	var wins = 0;
	
	var wordSelector = mysteryword[Math.floor(Math.random() * mysteryword.lenth)];
	var spaceDash = "";
	var letters = wordSelector.split('');
	var guesses = 10;
	var placeholder = "_"
	var guessedLetters = []

	var game = {
		mysteryword:["peach", "bowser", "mushroom", "fireball", "star", "castle", "luigi"],
		lettersGuessed: [],
		
		totalLetters: [],
		
		randword: "",
		
		
		}

	game.randword = game.mysterword[Math.floor(Math.random() * mysteryword.lenth)];
	console.log(game.randword);




	
	// var winTotal =$('<div>');
	// winTotal = " 23232"
	// $("#wins").append(winTotal



	


})

	// for (var num = 0; num < letters.length; num++) {
	// spaceDash = spaceDash + "_";
	// }


	// if (userGuess=){}

	// document.onkeyup = function(event) {
	// var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// }












