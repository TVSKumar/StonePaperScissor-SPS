let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorDiv = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random()*3);
    return choices[randomnumber];
}

function convertToWord(letter){
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    else return "SCISSOR";
}

function win(User, Computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = convertToWord(User) + " beats " + convertToWord(Computer) + " you WIN lit "
}

function loss(User, Computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = convertToWord(User) + " lose to " + convertToWord(Computer) + " you loss "
}

function darw(User, Computer) {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = convertToWord(User) + " Darws with " + convertToWord(Computer) + " you loss "

}

function game(UserChoies) {
    const ComputerChoice = getComputerChoice();
    switch (UserChoies + ComputerChoice) {
    case "rr":
    case "pp":
    case "ss":
      darw(UserChoies, ComputerChoice);
      break;
    case "rs":
    case "sp":
    case "pr":
      win(UserChoies, ComputerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      loss(UserChoies, ComputerChoice);
      break;
    }
}

function main() {
    rockDiv.addEventListener('click', function(){
        game("r");
    })

    paperDiv.addEventListener('click', function(){
        game("p");
    })

    scissorDiv.addEventListener('click', function(){
        game("s");
    })
}

main();









