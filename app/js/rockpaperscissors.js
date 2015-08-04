////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput ();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move ||randomPlay ();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove===computerMove){
       return (`tie`);
    }
    if (playerMove==="rock"){
        if (computerMove==="scissors"){
            return ('player');
        }else{
            return ('computer');
        }
    }
    if (playerMove==="paper"){
        if (computerMove==="rock"){
            return ('player');
        }else{
            return ('computer');
        }
    }
    if (playerMove==="scissors"){
        if (computerMove==="paper"){
            return ('player');
        }else{
            return ('computer');
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins <5) && (computerWins <5)) {
        var winner = getWinner (playerMove, computerMove);
        var playerMove = getPlayerMove ();
        var computerMove = getComputerMove ();

        if (winner=='player') {
            playerWins +=1
        } else if (winner=='computer'){
            computerWins +=1
        } else if (winner =='tie'){
            console.log ("Tie, try again");
        }
        
    console.log('Player chose ' + playerMove +' while Computer chose ' + computerMove + '.');
    console.log('The score is currently ' + playerWins +' to ' +computerWins + '.');
}
    return [playerWins, computerWins];
}
playToFive ();

