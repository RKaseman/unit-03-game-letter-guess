
var letters = ["a", "e", "i", "o", "u"];

var wins = 0;
var losses = 0;
var guessesLeft = 2;
var guessArray = [];
var userGuess;

gameSetup();
document.querySelector("#message").innerHTML = "WELCOME<em>!!</em><br/>Waiting For Your Guess...";

function gameSetup() {
    targetLetter();
    console.log("targetLetter() = " + computerPick);
    guessesLeft = 2;
    guessArray = [];
    document.querySelector("#wins").innerHTML = "Wins<hr/>" + wins;
    document.querySelector("#losses").innerHTML = "Losses<hr/>" + losses;
    document.querySelector("#guess-count").innerHTML = "You Have " + guessesLeft + " Guesses Left";
    document.querySelector("#used").innerHTML = "You've Guessed: " + guessArray;
};

function targetLetter() {
    computerPick = letters[Math.floor(Math.random() * letters.length)];
    return computerPick;
};

function addToGuessArray() {
    guessArray.push(userGuess);
    document.querySelector("#used").innerHTML = "You've Guessed: " + guessArray;
    console.log("addToGuessArray() = " + guessArray);
};

document.onkeyup = function (keyPress) {
    userGuess = keyPress.key.toLowerCase();
    console.log("userGuess = " + userGuess);
    var inArray = letters.includes(userGuess);
    console.log("inArray = " + inArray);

    if (inArray === false) {
        document.querySelector("#message").innerHTML = "'" + userGuess + "'" + " is not a vowel.<br/>Guess again.";
        return;
    } else if (guessesLeft > 0 && userGuess === computerPick) {
        addToGuessArray();
        wins++;
        document.querySelector("#message").innerHTML = "Win <em>!!</em><br/>(but you're not psychic).";
        gameSetup();
    } else if (guessesLeft > 1 && userGuess !== computerPick) {
        guessesLeft--;
        document.querySelector("#guess-count").innerHTML = "You Have " + guessesLeft + " Guess Left";
        addToGuessArray();
        document.querySelector("#message").innerHTML = "'" + userGuess + "'" + " is incorrect.<br/>Guess again.";
        return;
    } else if (guessesLeft === 1 && userGuess !== computerPick) {
        losses++;
        document.querySelector("#message").innerHTML = "It was <strong>'" + computerPick + "'</strong>.<br/>Game Restarted.";
        gameSetup();
    }
};

var listItems = document.getElementById("buttons").querySelectorAll("li");
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", checkPressed);
}

function checkPressed() {
    userGuess = this.id;
    addToGuessArray();
    console.log("userGuess = " + userGuess);
    console.log("this.id = " + this.id);
    var j;
    for (var j = 0; j < letters.length; j++) {
        console.log("this.id === letters[j] =", this.id === letters[j]);
        if (this.id === computerPick) {
            console.log("this.id === computerPick =", this.id === computerPick);
            console.log("if true");
        } else {
            document.getElementById(this.id).style.color = "red";
            console.log("else false");
        }
    }
};

