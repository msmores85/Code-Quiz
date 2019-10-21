//IndexPage: 

//Questions:
//The following are the questions that will be a part of the quiz in the new appended div container. 
var questions = [
    {
        title: "Commonly used data types DO NOT include:", 
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    }, 
    {
        title: "The condition in an if / else statement is enclosed within ________.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "2. curly brackets"
    },
    {
        title: "Arrays in JavaScript can be used to store _______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    }, 
    {
        title: "String values must be enclosed within ______ when being assigned to variables.", 
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes"
    }, 
    {
        title: "A very useful tool used during development and debugging for printing cotent to the debugger is:", 
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"], 
        answer: "4. console.log"
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
var question2Div = document.querySelector("#questionPage2");
var question3Div = document.querySelector("#questionPage3");
var question4Div = document.querySelector("#questionPage4");
var question5Div = document.querySelector("#questionPage5");



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
    
    

    //Conditions for the buttons: 
   /* qa1.addEventListener("click", function(){
        if(qa1 === answer1){
            var correct = document.createElement("p");
            question1Div.append("Correct");
        } else {
            var wrong = document.createElement("p");
            question1Div.append("Wrong");
        }
    }); 
    qa2.addeventListener("click", function(){
        if(qa2 === answer1){
            question1Div.append("Correct");
        } else {
            question1Div.append("Wrong");
        }
    });*/

})

/*var answer1 = questions[0].answer;

    if(qa1 === answer1 || qa2 === answer1 || qa3 === answer1 || qa4 === answer1){
        var correct = document.createElement("p");
        question1Div.append("Correct");
    } else {
        var wrong = document.createElement("p");
        question1Div.append("Wrong");
    }
    */

/*var numberClicked = "";


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
*/


//Incorrect answers - subtracted time from timer.
//Quiz stops when all answers answered or timer reaches 0.
//Addition of points to local storage - will require a parseInt of some kind


//All Done Div:
//All done! Header
//Your final score is ____. paragraph with number input from local storage.
//Enter initials with textarea and submit button with onclick event to Highscores page
//Display for overall points
//Textbox for the user to type initials into


//HighScores Page: 
//Using local storage to house the user's highscores
//Rendering highscores from local storage onto the Highscores page
//Clearing the highscores with a button click
