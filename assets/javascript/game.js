// document.onkeyup = function(event) { 

    // window.alert ("Guess What Letter I Am Thinking?");
    
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // var = alphabet[Math.floor(Math.random() * 26)]
    // alert("Letter Chosen");
    
var wins = 0;
var losses = 0;   
var guesses = 9;
var computerChoice;
var userGuess;
var lettersUsed = [];

console.log
    
var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];

document.onkeyup = function(event) {
    
    var userGuess = event.key;
        lettersUsed.push(event.key);
        document.getElementById("lettersUsed").textContent = 'Letters Used: ' + lettersUsed;
    
        if (userGuess === computerChoice) {

        wins++;

        guesses = 9;

        lettersUsed = [];
        document.getElementById("wins").textContent = 'Wins: ' + wins;


        }

        else 
        
        guesses--;
        document.getElementById("guesses-left").textContent = 'Guesses Left: ' + guesses;

        
        if (guesses === 0) {

            losses++;


            guesses = 9;

            lettersUsed = [];
            document.getElementById("losses").textContent = 'Losses: ' + losses;



        }
        
        
        
        
        
        console.log(userGuess) 
}





//         if (lettersUsed.indexOf(userGuess) > -1)
            
//         alert("No, Pick Anoter")

//     }

// // else if (userGuess)document.getelelemetById() 






// wins = document.getElementById("wins")


// console.log(computerChoice);

// if (guesses ===  0) {
//         lettersGuessed += key + ', ';
//         if (key == computerChoice) {
//             wins++;
                                      
//         }
//         // else if (key != computerChoice && guesses != 0) {
//             guesses--;
//             (displayResults)(key, guesses);
//         }
//     }
//     // else if (guesses == 0) {
//         losses++;
         
//  console.log                           
       
//     }
// }

// alert("Only A-Z allowed.");
// }

