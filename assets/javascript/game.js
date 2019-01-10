
var letters = ["a", "e", "i", "o", "u"];

var wins = 0;
var losses = 0;
var guessesLeft = 2;
var guessArray = [];
var userGuess;
var message = document.querySelector("#message");

gameSetup();
message.innerHTML = "WELCOME<em>!!</em><br/>Tap Or Enter A Guess...";

function gameSetup() {
    targetLetter();
    console.log("targetLetter() = " + computerPick);
    guessesLeft = 2;
    guessArray = [];
    document.querySelector("#wins").innerHTML = "Wins<hr/>" + wins;
    document.querySelector("#losses").innerHTML = "Losses<hr/>" + losses;
    document.querySelector("#guess-count").innerHTML = "You Have<br/>" + guessesLeft + " Guesses Left";
    document.querySelector("#used").innerHTML = "<strong>Waiting For<br/>Your Guess</strong>";
};

function targetLetter() {
    computerPick = letters[Math.floor(Math.random() * letters.length)];
    return computerPick;
};

function addToGuessArray() {
    guessArray.push(userGuess);
    document.querySelector("#used").innerHTML = "You've Guessed:<br/>" + guessArray;
    console.log("addToGuessArray() = " + guessArray);
};

function notVowel() {
    message.innerHTML = "'" + userGuess + "'" + " is not a vowel.<br/>Guess again.";
    return;
};

function win() {
    wins++;
    message.innerHTML = "Win <em>!!</em><br/>(but you're not psychic).";
    gameSetup();
};

function wrongGuess() {
    guessesLeft--;
    document.querySelector("#guess-count").innerHTML = "You Have<br/>" + guessesLeft + " Guess Left";
    message.innerHTML = "'" + userGuess + "'" + " is incorrect.<br/>Guess again.";
    addToGuessArray();
    return;
};

function loss() {
    losses++;
    message.innerHTML = "It was <strong>'" + computerPick + "'</strong>.<br/>Game Restarted.";
    gameSetup();
};

function matchLogic() {
    var inArray = letters.includes(userGuess);
    console.log("inArray = " + inArray);
    if (inArray === false) {
        notVowel();
    } else if (guessesLeft > 0 && userGuess === computerPick) {
        win();
    } else if (guessesLeft > 1 && userGuess !== computerPick) {
        wrongGuess();
    } else if (guessesLeft === 1 && userGuess !== computerPick) {
        loss();
    }
};

document.onkeyup = function (keyPress) {
    userGuess = keyPress.key.toLowerCase();
    console.log("userGuess = " + userGuess);
    matchLogic();
};

function styleReset() {
    for (var k = 0; k < guessArray.length; k++) {
        document.getElementById(guessArray[k]).style.opacity = "1.0";
    }
}

// adds listener to each letter's li element
var listItems = document.getElementById("buttons").querySelectorAll("li");
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", checkPressed);
};

function checkPressed() {
    userGuess = this.id;
    var j;
    for (var j = 0; j < listItems.length; j++) {
        if (userGuess === computerPick) {
            styleReset();
            win();
            return;
        } else if (guessesLeft > 1 && userGuess !== computerPick) {
            document.getElementById(userGuess).style.opacity = "0.25";
            wrongGuess();
            return;
        } else if (guessesLeft === 1 && userGuess !== computerPick) {
            styleReset();
            loss();
            return;
        }
    }
};

