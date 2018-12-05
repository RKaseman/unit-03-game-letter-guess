
var letters = ["a", "e", "i", "o", "u"];

var wins = 0;
var losses = 0;
var guessesLeft = 2;
var guessArray = [];
var userGuess;

gameSetup();
document.querySelector("#message").innerHTML = "Waiting for a guess...";

function gameSetup() {
    targetLetter();
    console.log("targetLetter() = " + computerPick);
    guessesLeft = 2;
    guessArray = [];
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector("#used").innerHTML = "Your guesses: " + guessArray;
};

function targetLetter() {
    computerPick = letters[Math.floor(Math.random() * letters.length)];
    return computerPick;
};

function addToGuessArray() {
    guessArray.push(userGuess);
    document.querySelector("#used").innerHTML = "Your guesses: " + guessArray + " ";
    console.log("addToGuessArray() = " + guessArray);
};

document.onkeyup = function (keyPress) {
    userGuess = String.fromCharCode(keyPress.keyCode).toLowerCase();
    console.log("userGuess = " + userGuess);
    var test = letters.includes(userGuess);
    console.log("test = " + test);
    if (test === true) {
        guessesLeft--;
        document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
        addToGuessArray();
    } else {
        document.querySelector("#message").innerHTML = "invalid choice";
        return;
    }
    if (guessesLeft >= 1 && userGuess === computerPick) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#message").innerHTML = "Win <em>!!</em> (but you're not psychic).";
        gameSetup();
        console.log("targetLetter() win = " + computerPick);
    } else {
        document.querySelector("#message").innerHTML = "Incorrect guess. You're not psychic.";
        return;
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#message").innerHTML = "You lose. Game restarted.";
        gameSetup();
        console.log("targetLetter() lose = " + computerPick);
    }
};

