//IndexPage: 

//Questions:
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


//The following are additional variables to hide elements on the page:
var startPage = document.querySelector("#main");



//The following are functions to render the questions on the page: 
//The following function hides the main div created  the style.display = "none" component from: https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/
startButton.addEventListener("click", function(){
    startPage.style.display = "none";
})


//The following code is to render the question answers on the page:
var question1Div = document.querySelector("#questionPage1");

startButton.addEventListener("click", function(){
    //Question 1 displayed: 
    question1Div.style.display = "block";
    var question1 = questions[0].title;
    $("#question1").append(question1);
    var list1 = document.querySelector("#list1");
    
    //Question1 Answers displayed:
    var qa1 = questions[0].choices[0]; 
    $("#q1a1").append(qa1);
    var qa2 = questions[0].choices[1];
    $("#q1a2").append(qa2);
    var qa3 = questions[0].choices[2];
    $("#q1a3").append(qa3);
    var qa4 = questions[0].choices[3]; 
    $("#q1a4").append(qa4);

})

var answer1 = questions[0].answer;
var numberClicked = "";

numberClicked.addEventListener("click", function(){
    //Answer: 
    if(numberClicked === answer1) {
        var correct = document.createElement("p"); 
        question1Div.append("Correct");
    }else{
        var incorrect = document.createElement("p");
        question1Div.append("Incorrect");
    }
})

//Incorrect answers - subtracted time from timer.
//Quiz stops when all answers answered or timer reaches 0.
//Addition of points to local storage
//Display for overall points
//Textbox for the user to type initials into


//HighScores Page: 
//Using local storage to house the user's highscores
//Rendering highscores from local storage onto the Highscores page
//Clearing the highscores with a button click
