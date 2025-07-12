/**
 * This is a rock-paper-scissors game implementation.
 * The user can play against the computer, which randomly selects rock, paper, or scissors.
 * The game consists of 5 rounds, the winner is determined by the score at the end of the rounds.
 * How we'll achieve this:
 * 1. Write the logic for the computer choice. Hint: Use Math.random() to generate a random number between 1 and 3, then map it to rock, paper, or scissors.
 * 2. Write the logic for the human choice.
 * 3. Declare the players score variables.
 * 4. Write the logic for a single round
 * 5. Write the logic to play the entire game.
 */
//Tackling the problem:
//3. Setting scores as global variables
let computerScore = 0;
let humanScore = 0;

/**
 * 1. Pseudocode for computer choice:
 * - Generate a random number between 1 and 3
 * - Map the number to rock, paper, or scissors.
 * - SWITCH 1: rock, 2: paper, 3: scissors
 */
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // Generates a number between 1 and 3
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return null; // This should never happen
    }
}

//2. 
function getHumanChoice(choice) {
    let answer = choice.toLowerCase();
    if(answer === 'rock' || answer === 'paper' || answer === 'scissors'){
        return answer;
    }else{
        newAnswer = prompt("Enter a valid option"); 
        getHumanChoice(newAnswer);
    };
}

//4. Logic for a single round
/**
 * Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.
 */
function playRound(computerChoice, humanChoice){
    if(computerChoice.localeCompare(humanChoice) !== 0){

        if(computerChoice === 'scissors' && humanChoice ==='paper'
            || computerChoice === 'paper' && humanChoice ==='scissors'
        ){
          if (computerChoice === 'scissors' && humanChoice ==='paper'){
            computerScore++;
                return (`You lose! ${computerChoice} beats ${humanChoice}. Computer score: ${computerScore}`);
          }else{
            humanScore ++;
                return (`You win! ${humanChoice} beats ${computerChoice}. Human score: ${humanScore}`);
          }
            
        }else{
            if(computerChoice.localeCompare(humanChoice) > 0){
                humanScore ++;
                return (`You win! ${humanChoice} beats ${computerChoice}. Human score: ${humanScore}`);
            }else{
                computerScore ++;
                return (`You lose! ${computerChoice} beats ${humanChoice}. Computer score: ${computerScore}`);
            }
        }
    }else{
        newComputerChoice = getComputerChoice();
        return playRound(newComputerChoice, humanChoice);
    }
    
}


const cards = document.querySelectorAll('.card');
let humanChoice;
let result;
cards.forEach( card => {
    card.addEventListener('click', () => {
        humanChoice = getHumanChoice(card.children[0].children[0].textContent)
        result = playRound(getComputerChoice(), humanChoice)
        logResult(result);
        updateScore(result);
        finishRound(5);
    }
    );
} )

function logResult(string){
    const resultDiv = document.querySelector('.log-result');
    let resultTag = document.querySelector('.log-result > h1');
    
    if (resultTag){
        resultTag.textContent = string;
        resultDiv.appendChild(resultTag);
    }else{
        resultTag = document.createElement('h1');
        resultTag.textContent = string;
        resultDiv.appendChild(resultTag);
    }
}

function updateScore(winner){
    const result = winner.split(/[!:\.\s]+/).filter(Boolean).find(value => value === 'win')
    const scores = document.querySelectorAll('.score-content');
    scores.forEach(score => { 
        if (result === 'win' && score.children[0].textContent === 'Human Score'){
            score.children[1].textContent = humanScore;
        }else if (score.children[0].textContent === 'Computer Score'){
            score.children[1].textContent = computerScore;
        }         
    })
}

function finishRound(rounds){
    if (computerScore >= rounds || humanScore >= rounds){
        cards.forEach(card => {
            card.classList.add('disable');
        });
        humanScore > computerScore ? alert('You win!') : alert('Computer wins');
        const newButton = document.querySelector('.result-container');
    const btn = document.createElement('button');
    btn.textContent = 'New game';
    btn.onclick = newGame;
    newButton.appendChild(btn);
    }
}

function newGame(){
     cards.forEach(card => {
            card.classList.remove('disable');
        });
        resetScore();
        const log = document.querySelector('.log-result');
        log.children[0].remove();
        const resultContainer = document.querySelector('.result-container');
        resultContainer.children[1].remove();
}

function resetScore(){
    computerScore = 0;
    humanScore = 0;
    const scores = document.querySelectorAll('.score-content');
    scores.forEach(score => { 
        score.children[1].textContent = 0;
        });
}
