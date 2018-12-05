
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
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector("#used").innerHTML = "Your guesses: " + guessArray;
    guessesLeft = 2;
    guessArray = [];
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

// 
// function validate(strValue) {
// var objRegExp  = /^[a-z]+$/;
// var objRegExp  = /^[a-z\u00C0-\u00ff\s]+$/;
// return objRegExp.test(strValue);
//   }
// 

// 
// function myFunction() {
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.test(str);
document.getElementById("demo").innerHTML = res;
// }
// 

// 
// RegExpObject.test(string)
// 

document.onkeyup = function (keyPress) {
    guessesLeft--;
    document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
    userGuess = String.fromCharCode(keyPress.keyCode).toLowerCase();
    console.log("userGuess = " + userGuess);
    // var test = /^[A-Za-z]+$/;
    if (userGuess === 1) {
        document.querySelector("#message").innerHTML = "invalid choice";
        return;
    } else {
        addToGuessArray();
    }
    if (guessesLeft >= 0 && userGuess === computerPick) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#message").innerHTML = "Win <em>!!</em> (but you're not psychic).";
        gameSetup();
        console.log("targetLetter() win = " + computerPick);
    } else if (guessesLeft >= 0 && userGuess !== computerPick) {
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        document.querySelector("#message").innerHTML = "Incorrect guess. You're not psychic.";
    };
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#message").innerHTML = "You lose. Game restarted.";
        gameSetup();
        console.log("targetLetter() lose = " + computerPick);
    };
};

