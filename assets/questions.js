//The following are the questions that will be a part of the quiz in the new appended div container. 
var questions = [
    {
        title: "Commonly used data types DO NOT include:", 
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    }, 
    {
        title: "The condition in an if / else statement is enclosed within ________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "alerts"
    },
    {
        title: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }, 
    {
        title: "String values must be enclosed within ______ when being assigned to variables.", 
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    }, 
    {
        title: "A very useful tool used during development and debugging for printing cotent to the debugger is:", 
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"], 
        answer: "console.log"
    }

];


//Variables: 

//Functions: 

//The following are variables for the timer: 
var countdown = document.getElementById("timer");
var startButton = document.getElementById("start");
var seconds = 75;
var endTime = 0;

//The .addEventListener function causes the application to listen for the button to click.
//When the button is clicked, the timer begins to countdown from 75 seconds until it reaches 0.
startButton.addEventListener("click", function(){
    var myCount = 0;
    if(myCount === 0){
        myCount = setInterval(function(){
        
            seconds--;
            countdown.textContent = "Time: " + seconds + "seconds";
        
            if(seconds <= 0) {
                clearInterval(myCount);
            };
        //}) console.log(seconds);
    },1000);
}
});





