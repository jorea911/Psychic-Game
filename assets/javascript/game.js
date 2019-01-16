$(document).ready(function(){

    var alphabet = [ "a", "b", "c", "d", "e","f","h","i","j","k","l","m","n", "o","p","q","r","s", "t","u","v","w","x","y","z"];
    var randomLetter = "";
    var lossesCounter = 0;
    var guessesLeftCounter = 9;
    var winsCounter = 0;


    function getAlphabet(){
        randomLetter = alphabet[Math.floor(Math.random()* alphabet.length)];
        console.log("random letter generated:" + randomLetter);
        guessesLeftCounter = 9;
        $(".guessesSoFar").empty();
        $(".guessesLeft").empty();
        $(".guessesLeft").append(" " +guessesLeftCounter);
    
        document.onkeyup = function recordGuesses(e, winsCounter) {
            var userInput = (e.key).toLowerCase();
            if (alphabet.includes(userInput)) {
                $(".guessesSoFar").append(" " + userInput + " ");
            }; 
            if(randomLetter == userInput){
                e.preventDefault();
                winningStuff();
            }
            else if (alphabet.includes(userInput) && randomLetter!== userInput) {
                e.preventDefault();
                lossesStuff();
                
                }
    
            } 
        };  

    getAlphabet();

    function winningStuff(){
        winsCounter++;
        $(".wins").empty();
        $(".wins").append(winsCounter);
        getAlphabet();
    }

    function lossesStuff(){
        guessesLeftCounter--;
        $(".guessesLeft").append(" " + guessesLeftCounter);
        if (guessesLeftCounter === 0) {
            lossesCounter++;
            $(".losses").empty();
            $(".losses").append(" " + lossesCounter);
            getAlphabet();
        } else {
            console.log("else statement excuted");
            $(".guessesLeft").empty();
            $(".guessesLeft").append(" " +guessesLeftCounter);

        }
    }
    


});





