//Use the src attribute of the script tag to link to this file, 
//rather than embedding the code directly in your HTML document.
//The src attribute specifies the URL of the media file to play. 
//This attribute is required when <source> is used in <audio> and <video>.
var computerGuess;
    var characters       = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var charactersLength = charactersLength;
    var userGuessLog = [];
    var attempts = 0;

    function newGame(){
        window.location.reload();
    }

    function init() {
            computerGuess = characters[(Math.floor(Math.random() * characters.length))];
            console.log(computerGuess);
    }

    function compareGuess(){
        var userGuess = " " + document.getElementById('inputBox').value;
        console.log(userGuess);

        userGuessLog.push(userGuess);
        console.log(userGuessLog);
        document.getElementById('guessLog').innerHTML = userGuessLog;

        attempts++;
        document.getElementById('attempts').innerHTML = attempts;

            if(userGuess > computerGuess) {
            document.getElementById('guess-text').innerHTML = "Guess Again, It's starting to seem you are not Psychic";
            document.getElementById('inputBox').value = "";
        }   else if (userGuess < computerGuess){
            document.getElementById('guess-text').innerHTML = "Guess Again, It's starting to seem you are not Psychic";
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('guess-text').innerHTML = "Correct, You Must be Psychic!"
        }
    }