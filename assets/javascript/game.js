
var letters = ["a", "e", "i", "o", "u"];

var targetLetter = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 2;
var guessedLetters = [];
console.log("targetLetter = " + targetLetter);
console.log("wins = " + wins);
console.log("losses = " + losses);
console.log("guessesLeft = " + guessesLeft);
console.log("guessedLetters = " + guessedLetters);

function gameSetup() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector("#used").innerHTML = "Guesses made: " + guessedLetters;
}

// gameSetup();

function subtractGuessesLeft() {
    guessesLeft - 1;
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
};

function addGuessedLetters() {
    document.querySelector("#used").innerHTML = "Your guesses: " + guessedLetters;
};

// subtractGuessesLeft();

document.onkeyup = function(keyPress) {
    // console.log(keyPress);
    guessesLeft - 1;
    console.log("guessesLeft = " + guessesLeft);
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
    var userGuess = String.fromCharCode(keyPress.keyCode).toLowerCase();
    console.log("userGuess = " + userGuess);

    if (guessesLeft > 0) {
        // if (userGuess !== targetLetter) {
        //     console.log("targetLetter = " + targetLetter);
        //     guessedLetters.push(userGuess);
        //     subtractGuessesLeft();
        //     addGuessedLetters();
        //     console.log("guessedLetters = " + guessedLetters);
        // }
            if (userGuess === targetLetter) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#message").innerHTML = "you win";
            subtractGuessesLeft();
        }
        // if (userGuess !== targetLetter) {
        //     losses++;
        //     document.querySelector("#message").innerHTML = "Losses: " + losses;
        //     document.querySelector("#message").innerHTML = "you lose";
        // }
        // } else if (guessesLeft === 0) {
        //     losses++;
        //     document.querySelector("#message").innerHTML = "Losses: " + losses;
        //     document.querySelector("#message").innerHTML = "you lose";
        // }
    }
};

