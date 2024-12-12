
let randomNumber;
function generateRandom(){
    randomNumber = Math.floor(Math.random() * 100)+1; //Generating random number
    return randomNumber;
}


const userInput = document.getElementById("userInput"); //retrieve the element where user entered the number
const btnsubmit = document.getElementById("btnsubmit"); //fetch the submit button element
const btnreset = document.getElementById("btnreset"); //fetch the reset button element
const result = document.getElementById("result");     //p element where the result of the guess is displayed


const counter = document.getElementById("counter");   //span element fetching
let noOfAttempts = 0; // counter for number of attempts to guess a number


//function to compare the random number with users guess 
// and incrimenting the counter for every click
btnsubmit.addEventListener('click', () => {
    noOfAttempts++;
    const userGuess = parseInt(userInput.value);
    if (userGuess < randomNumber) {
      result.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
      result.textContent = "Too high! Try again.";
    } else {
      result.textContent = "Congratulations! You guessed the number!";
    }
    counter.textContent = noOfAttempts;  //loads the final counter value to the span element
  });

  btnreset.addEventListener('click', () =>{
    noOfAttempts = 0;
    counter.textContent = noOfAttempts;
    result.textContent = '';
    userInput.value = ''; 
    generateRandom();

  })