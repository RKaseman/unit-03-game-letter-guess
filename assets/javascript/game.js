
var letters = ["a", "e", "i", "o", "u"];

var wins = 0;
var losses = 0;
var guessesLeft = 2;
var guessArray = [];

gameSetup();

function gameSetup() {
    targetLetter();
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
    guessArray = [];
    document.querySelector("#used").innerHTML = "Your guesses: " + guessArray;
}

function targetLetter() {
    pick = letters[Math.floor(Math.random() * letters.length)];
    console.log("targetLetter() = " + pick);
    return pick;
}

function addGuessedLetters() {
    document.querySelector("#used").innerHTML = "Your guesses: " + guessArray;
    console.log("guessArray = " + guessArray);
};

document.onkeyup = function (keyPress) {
    console.log("guessesLeft = " + guessesLeft);
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
    var userGuess = String.fromCharCode(keyPress.keyCode).toLowerCase();
    console.log("userGuess = " + userGuess);
    guessArray.push(userGuess);
    addGuessedLetters();

    if (guessesLeft > 0) {
        // if (userGuess !== pick) {
        //     console.log("pick = " + pick);
        //     guessArray.push(userGuess);
        //     guessCount();
        //     addGuessedLetters();
        //     console.log("guessArray = " + guessArray);
        // }
        if (userGuess === pick) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#message").innerHTML = "Win <em>!!</em> (but you're not psychic).";
            guessesLeft--;
            document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
            gameSetup();
            console.log("pick function win = " + pick);
            console.log("wins = " + wins);
        } else if (userGuess !== pick) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            document.querySelector("#message").innerHTML = "Lose. You're not psychic.";
            gameSetup();
            console.log("pick function lose = " + pick);
            console.log("losses = " + losses);
        }
        // } else if (guessesLeft === 0) {
        //     losses++;
        //     document.querySelector("#message").innerHTML = "Losses: " + losses;
        //     document.querySelector("#message").innerHTML = "you lose";
        // }
    }
};

