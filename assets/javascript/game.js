
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
    document.querySelector("#used").innerHTML = "Your guesses: " + guessArray;
    document.querySelector("#message").innerHTML = "Waiting for a guess...";
    guessesLeft = 2;
    guessArray = [];
};

function targetLetter() {
    pick = letters[Math.floor(Math.random() * letters.length)];
    console.log("targetLetter() = " + pick);
    return pick;
};

function addGuessedLetters() {
    document.querySelector("#used").innerHTML = "Your guesses: " + guessArray + " ";
    console.log("addGuessedLetters() = " + guessArray);
};

document.onkeyup = function (keyPress) {
    // if (keyPress.keyCode === /^[A-Za-z]+$/) {
        // console.log("guessesLeft = " + guessesLeft);
        document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
        var userGuess = String.fromCharCode(keyPress.keyCode).toLowerCase();
        // console.log("userGuess = " + userGuess);
        guessArray.push(userGuess);
        addGuessedLetters();

        if (guessesLeft >= 0 && userGuess === pick) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#message").innerHTML = "Win <em>!!</em> (but you're not psychic).";
            // guessesLeft--;
            // document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
            gameSetup();
            // console.log("pick function win = " + pick);
            // console.log("wins = " + wins);
        } else if (guessesLeft >= 0 && userGuess !== pick) {
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            document.querySelector("#message").innerHTML = "Incorrect guess. You're not psychic.";
            guessesLeft--;
            document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
            // console.log("losses = " + losses);
            if (guessesLeft === 0) {
                losses++;
                document.querySelector("#losses").innerHTML = "Losses: " + losses;
                document.querySelector("#message").innerHTML = "You lose. Game restarted.";
                gameSetup();
                // console.log("pick function lose = " + pick);
                // console.log("losses = " + losses);
            };
        };
    // } else {
    //     document.querySelector("#message").innerHTML = "invalid choice";
    // };
};

