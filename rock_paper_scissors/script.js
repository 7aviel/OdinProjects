let computerScore = 0;
let humanScore = 0;
let computerGlobalChoice;

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
    }
}

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
        computerGlobalChoice = getComputerChoice();
        return playRound(computerGlobalChoice, humanChoice);
    }
    
}


const cards = document.querySelectorAll('.card');
let humanChoice;
let result;
cards.forEach( card => {
    card.addEventListener('click', () => {
        humanChoice = getHumanChoice(card.children[0].children[0].textContent);
        computerGlobalChoice = getComputerChoice();
        result = playRound(computerGlobalChoice, humanChoice);
        logResult(computerGlobalChoice, humanChoice);
        updateScore(result);
        finishRound(5);
    }
    );
} )

function logResult(computerChoice, humanChoice){
    let compChoice = getEmojiFromString(computerChoice);
    let humChoice = getEmojiFromString(humanChoice);
    const humanEmoji = document.querySelector('#human-emoji');
    const compEmoji = document.querySelector('#computer-emoji');
    humanEmoji.textContent = humChoice;
    compEmoji.textContent = compChoice;
}


function getEmojiFromString(string){
    switch (string){
        case 'rock':
            return '✊';
        case 'paper':
            return '✋';
        case 'scissors':
            return '✌️';
        default:
            return null;
    }
        
}

function updateScore(winner){
    const result = getArrayString(winner).find(value => value === 'win')
    const scores = document.querySelectorAll('.score-content');
    scores.forEach(score => { 
        if (result === 'win' && score.children[0].textContent === 'Human Score'){
            score.children[1].textContent = humanScore;
        }else if (score.children[0].textContent === 'Computer Score'){
            score.children[1].textContent = computerScore;
        }         
    })
}

function getArrayString(string){
    return string.split(/[!:\.\s]+/).filter(Boolean);
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
        const resultContainer = document.querySelector('.result-container');
        resultContainer.children[0].remove();
}

function resetScore(){
    computerScore = 0;
    humanScore = 0;
    const scores = document.querySelectorAll('.score-content');
    scores.forEach(score => { 
        score.children[1].textContent = 0;
        });
}
