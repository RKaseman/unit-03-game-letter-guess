
// pseudocode
// display accurate win tally
// display accurate loss tally
// compare between userGuess and computerLetter made functional
// warn if key isn't a letter
// plug messages into div
// remove current message from div
var letters = ["a", "e", "i", "o", "u"];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 2;
var guessedLetters = [];
var computerLetter;
console.log("computerGuess = " + computerGuess);

function subtractGuessesLeft() {
    guessesLeft - 1;
    document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

function newComputerLetter() {
    this.computerLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
};

function addGuessedLetters() {
    document.querySelector("#used").innerHTML = "Your guesses: " + guessedLetters;
};

newComputerLetter();
subtractGuessesLeft();

document.onkeyup = function(keyPress) {
    var userGuess = String.fromCharCode(keyPress.keyCode).toLowerCase();
    console.log(userGuess);

    if (userGuess !== computerLetter) {
        guessesLeft - 1;
        guessedLetters.push(userGuess);
        subtractGuessesLeft();
        addGuessedLetters();
        console.log("guessedLetters = " + guessedLetters);
    }
    if (guessesLeft > 0) {
        if (userGuess === computerLetter) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#message").innerHTML = "you win";
        } else if (guessesLeft === 0) {
            losses++;
            document.querySelector("#message").innerHTML = "Losses: " + losses;
            document.querySelector("#message").innerHTML = "you lose";
        }
    }
};
