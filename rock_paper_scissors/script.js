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
    //Let's make choice case-insensitive
    let answer = choice.toLowerCase();
    //Checks if the user's input is correct
    if(answer === 'rock' || answer === 'paper' || answer === 'scissors'){
        return answer;
    }else{
        newAnswer = prompt("Enter a valid option"); //If not, it calls itself again
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
/**
 * 3 scenarios 
 * 1. Player and computer make the same choice. Request a new round
 * 2. Paper > Rock > Scissors > Paper
 * alphabetical
 * S > R > P > S
 */
function playRound(computerChoice, humanChoice){
    if(computerChoice.localeCompare(humanChoice) !== 0){
        //   Scissors                      Paper
        if(computerChoice === 'scissors' && humanChoice ==='paper'){
            computerScore++;
            console.log(`You lose!. ${computerChoice} beats ${humanChoice}. Computer score: ${computerScore}`);
        }else{
            if(computerChoice.localeCompare(humanChoice) > 0){
                humanScore ++;
                console.log(`You win!. ${humanChoice} beats ${computerChoice}. Human score: ${humanScore}`);
            }else{
                computerScore ++;
                console.log(`You lose!. ${computerChoice} beats ${humanChoice}. Computer score: ${computerScore}`);
            }
        }
    }else{
        newComputerChoice = getComputerChoice();
        playRound(newComputerChoice, humanChoice);
    }
    
}
/**
 * step 4 
 * Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
 * WHILE flag <= 5 
 *    let compChoice = getComputerChoice()
 *    let userChoice = getHumanChoice(prompt("enter option"))
 *    playRound(computerChoice, humanChoice)
 * ENDWHILE
 * IF computerScore > humanScore THEN
 *    Computer Wins!
 * ELSE
 *    Human Wins!
 */
function playGame(){
    let compChoice;
    let userChoice;
    let flag = 0;
    while(flag < 5){
        compChoice = getComputerChoice();
        userChoice = getHumanChoice(prompt('enter an option'));
        playRound(compChoice, userChoice);
        flag++;
    }
    if(computerScore > humanScore){
        console.log(`Computer wins!. Computer score: ${computerScore}`);
    }else{
        console.log(`Human wins.! Human score: ${humanScore}`);
    }
}

playGame();