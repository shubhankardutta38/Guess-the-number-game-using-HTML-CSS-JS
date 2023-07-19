
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');


//rand - random number is generated for user to guess
let rand = Math.floor(Math.random() * 100);

//counter for the amount of guesses the user has had
let noOfGuesses = 1;

let guessedNumbers = [];

//variable that stores the prompt of the user's name
let name = prompt("What is your name ??");

btn.addEventListener("click", (e)=>{
    if(input.value == rand){
        text1.innerText = "Congratulations, You Win " + name + "!!";
        text2.innerText = "The Number was " + rand;
        text3.innerText = "You guessed it in " + noOfGuesses + " attempts";
        text4.innerText = "Thank You ☺️";
        
        text1.style.color = "#6e48aa";
        text2.style.color = "#6e48aa";
        text3.style.color = "#6e48aa";
    }
    
    else if(input.value == ""){
        alert("Guess a number");
    }
    
    else if(input.value > 100){
        alert("Number guessed should't exceed a value of 100");
    }
    
    else if(input.value < 0){
        alert("Number guessed should't exceed a value below 0");
    }
        
    else if(input.value < rand){
        guessedNumbers.push(input.value);
        text1.innerText = "Your guess is too low.";
        text2.innerText = "No. of guesses: " + noOfGuesses;
        text3.innerText = "Guessed Numbers are: " + guessedNumbers;
        noOfGuesses += 1;
    }
    
    else if(input.value > rand){
        guessedNumbers.push(input.value);
        text1.innerText = "Your guess is too high.";
        text2.innerText = "No. of guesses: " + noOfGuesses;
        text3.innerText = "Guessed Numbers are: " + guessedNumbers;
        noOfGuesses += 1;
    }
})