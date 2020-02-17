var computerGuess;
var characters       = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var charactersLength = charactersLength;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;
var compareOutcome;
var winAttempts = 0;
var loseAttempts = 0;

function gameEnded(){
    document.getElementById('newGameButton').style.display = "inline"; 
    document.getElementById ('easyBtn').style.display ='none';
    document.getElementById ('hardBtn').style.display ='none';
    document.getElementById ('inputBox').setAttribute ('readonly', 'readonly');
    document.getElementById ('winLog').innerText = winAttempts;
    console.log(winAttempts);
    document.getElementById ('loseLog').innerText = loseAttempts;
    console.log(loseAttempts);
}

function easyMode(){
    maxGuesses = 10;
    document.getElementById ('easyBtn').className = 'activeButton';
    document.getElementById ('hardBtn').className = '';
}

function hardMode(){
    maxGuesses = 5;
    document.getElementById ('hardBtn').className = 'activeButton';
    document.getElementById ('easyBtn').className = '';
}

function newGame(){
    document.getElementById ('inputBox').removeAttribute ('readonly');
    document.getElementById ('inputBox').value = '';
    attempts = 0;
    document.getElementById ('attempts').innerText = attempts;
    userGuessLog = [];
    document.getElementById ('guessLog').innerText = userGuessLog;
    document.getElementById ('easyBtn').style.display ='inline';
    document.getElementById ('hardBtn').style.display ='inline';
    document.getElementById ('easyBtn').className = '';
    document.getElementById ('hardBtn').className = '';
    document.getElementById('newGameButton').style.display = "none"; 


}

function init() {
    computerGuess = characters[(Math.floor(Math.random() * characters.length))];
    console.log(computerGuess);
    document.getElementById('newGameButton').style.display = "none";       
}

//function compareOutcome (){
   // attempts++;
    //document.getElementById('winLog').innerHTML = winAttempts;
//}

function compareGuess(){
    var userGuess = "" + document.getElementById('inputBox').value;
    console.log(userGuess);

    userGuessLog.push(userGuess);
    console.log(userGuessLog);
    document.getElementById('guessLog').innerHTML = userGuessLog;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;

    if(userGuessLog.length < maxGuesses){
        if(userGuess > computerGuess) {
            document.getElementById('guess-text').innerHTML = "Guess Again, It's starting to seem you are not Psychic";
            document.getElementById('inputBox').value = "";
        }   else if (userGuess < computerGuess){
            document.getElementById('guess-text').innerHTML = "Guess Again, It's starting to seem you are not Psychic";
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('guess-text').innerHTML = 'You Win, Your Psychic Abilities guessed the Letter in ' + attempts + ' attempts';
            document.getElementById('container').style.backgroundColor = '#2DBC42';
            winAttempts++
            gameEnded();
        }

    } else {
        if(userGuess > computerGuess){
            document.getElementById('guess-text').innerHTML = 'You Lose, You must Not be Psychic. The correct Letter is ' + computerGuess;
            document.getElementById('container').style.backgroundColor = '#DD1527';
            loseAttempts++;
            gameEnded();
        } else if (userGuess < computerGuess){
            document.getElementById('guess-text').innerHTML = 'You Lose, You must Not be Psychic. The correct Letter is ' + computerGuess;
            document.getElementById('container').style.backgroundColor = '#DD1527';
            loseAttempts++;
            gameEnded();
        } else {
            document.getElementById('guess-text').innerHTML = 'You Win, Your Psychic Abilities guessed the Letter in ' + attempts + ' attempts';
            document.getElementById('container').style.backgroundColor = '#2DBC42';
            winAttempts++;
            gameEnded();
        }
    }
}