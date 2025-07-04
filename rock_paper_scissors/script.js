console.log("Hello, World!");

/**
 * This is a rock-paper-scissors game implementation.
 * The user can play against the computer, which randomly selects rock, paper, or scissors.
 * The game consists of 5 rounds, the winner is determined by the score at the end of the rounds.
 * How we'll achive this:
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
/**
 * IF DOES NOT equal rock, paper or scissors, then  
 */
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
function playRound(computerChoice, humanChoice){
    console.log("Let's play a Rock paper scissors game!");
    humanChoice
}

let ans = prompt("Enter rock scissors or paper")
console.log(getHumanChoice(ans));