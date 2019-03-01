document.onkeyup = function(event) {

// These are variables to be chosen on my page. 
    
var wins = 0;
var losses = 0;   
var guesses = 9;
var computerChoice;
var userGuess;
var lettersUsed = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];

/* Variables within function are being placed on the html page. 
Userguess is being activated on the keyboard by event.key and it's showing
the 'letters used' on the page */



    
    var userGuess = event.key;
        lettersUsed.push(event.key);
        document.getElementById("lettersUsed").textContent = 'Letters Used: ' + lettersUsed;

    /* If the userGuess is the same as the computer, then wins
    will go up for the user. The letters used will be shown at the bottom of the 
    screen when they guess. 

    Document grabs the 'wins variable' listed above' and places it in the html file
    according to the id designator */

        if (userGuess === computerChoice) {

        wins++;

        guesses = 9;

        lettersUsed = [];
        document.getElementById("wins").textContent = 'Wins: ' + wins;


        }

    /* The guesses left goes down */ 

        else 
        
        guesses--;
        document.getElementById("guesses-left").textContent = 'Guesses Left: ' + guesses;

        
        if (guesses === 0) {

            losses++;


            guesses = 9;

            lettersUsed = [];
            document.getElementById("losses").textContent = 'Losses: ' + losses;

        }

// console.log