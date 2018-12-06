
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
    document.querySelector("#guessCount").innerHTML = "Guesses left: " + guessesLeft;
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
    var inArray = letters.includes(userGuess);
    console.log("inArray = " + inArray);

    if (inArray === false) {
        document.querySelector("#message").innerHTML = "'" + userGuess + "'" + " is not a vowel.<br/>Guess again.";
        return;
    } else if (guessesLeft > 0 && userGuess === computerPick) {
        addToGuessArray();
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#message").innerHTML = "Win <em>!!</em><br/>(but you're not psychic).";
        gameSetup();
        console.log("targetLetter() win = " + computerPick);
    } else if (guessesLeft > 1 && userGuess !== computerPick) {
        guessesLeft--;
        document.querySelector("#guessCount").innerHTML = "Guesses left: " + guessesLeft;
        addToGuessArray();
        document.querySelector("#message").innerHTML = "'" + userGuess + "'" + " is incorrect.<br/>Guess again.";
        return;
    } else if (guessesLeft === 1 && userGuess !== computerPick) {
        losses++;
        document.querySelector("#message").innerHTML = "You lose.<br/>Game restarted.";
        gameSetup();
        console.log("targetLetter() lose = " + computerPick);
    }
};

