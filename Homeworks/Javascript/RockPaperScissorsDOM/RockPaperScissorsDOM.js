const options = ["rock-id", "paper-id", "scissors-id"];
var userScore = 0;
var computerScore = 0;
const userScoreDiv = document.getElementById("user-score");
const computerScoreDiv = document.getElementById("computer-score");
const scoreBoard = document.getElementsByClassName("scoreBoard");
const rockChoice = document.getElementById("r");
const paperChoice = document.getElementById("p");
const scissorsChoice = document.getElementById("s");
const result = document.querySelector(".result p");

function getComputerChoice() {
    const options = ["r", "p", "s"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

function convertWord(letter) {
    switch (letter) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
    }

}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreDiv.innerHTML = userScore;
    computerScoreDiv.innerHTML = computerScore;
    result.innerHTML = convertWord(userChoice) + " beats " + convertWord(computerChoice) + ". You won !";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreDiv.innerHTML = userScore;
    computerScoreDiv.innerHTML = computerScore;
    result.innerHTML = convertWord(userChoice) + " loses to " + convertWord(computerChoice) + ". You lost !";
}

function draw(userChoice, computerChoice) {
    userScoreDiv.innerHTML = userScore;
    computerScoreDiv.innerHTML = computerScore;
    result.innerHTML = "It's a draw !";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockChoice.addEventListener("click", function () {
        game("r");
    })

    paperChoice.addEventListener("click", function () {
        game("p");
    })

    scissorsChoice.addEventListener("click", function () {
        game("s");
    })
}

main();



