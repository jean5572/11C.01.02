//Loading Game
window.addEventListener('DOMContentLoaded', start());

function start(){
    //DOM can be placed here?
    console.log("start");
    playerChoice();
}

function playerChoice(){
    computerChoice();
}

function computerChoice(){
    const options = document.querySelectorAll("#buttons button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = "";
        });
    })
    //Computer options
    const computerOptions = ['rock', 'paper', 'scissors'];
    
    //What we have to do is to only run the MathRandom when the player has choosen a button
    options.forEach(option => {
        option.addEventListener("click", function(){
            //What the Math.floor does is to make one single number instead of having decimals
            const computerNumber = Math.floor(Math.random() * 3);
            //By adding the number to the Array the computer is going to pick rock, paper og scissors
            //computerChoice
            const computerChoise = computerOptions[computerNumber];
            //timeOut
            setTimeout(() =>{
            //Calling compareHands..
            compareHands(this.textContent, computerChoise);
            //Update images, replaceses the name with the choosen 
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoise}.png`;

            }, 2000);
           
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
        });
    });

    const compareHands = (playerChoice, computerChoise) =>{
        //Updating h2 for the result
        const winner = document.querySelector(".winner");
        //Checking for tie
        if(playerChoice === computerChoise){
            winner.textContent = "it's a tie";
            return;
        }
        //Check rock
        if(playerChoice ==="rock"){
            if(computerChoise === "scissors"){
                winner.textContent = "You win!";
                return;
            }else{
                winner.textContent = "You lose!";
                return;
            }
        }
        //Check for paper
        if(playerChoice ==="paper"){
            if(computerChoise === "scissors"){
                winner.textContent = "You lose!";
                return;
            }else{
                winner.textContent = "You win!";
                return;
            }
        }
        //Check for scissors
        if(playerChoice ==="scissors"){
            if(computerChoise === "rock"){
                winner.textContent = "You lose!";
                return;
            }else{
                winner.textContent = "You win!";
                return;
            }
        }
    }
    

    showAnimations();
}

function showAnimations(){

    // determineWinner();
}

// function determineWinner() {
    
// }

function showTie(){
    //Show animation
}

function showWin(){
    //Show animation
}

function showLose(){
    //Show animation
}

function reset(){

    start();
}
