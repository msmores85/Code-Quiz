# Code-Quiz
This repository provides a coding quiz site using Web APIs. 

Overall Purpose: As a coding bootcamp student I want to take a timed quiz on JavaScript fundamentals that stores high scores so that I can gauge my progress compared to my peers.

HTML Documents: 
    The index.html is the main page in which users can access the directions for the quiz and click the start button. From there, the user is directed to a new div that provides the first question. When an answer is clicked, the user is told if he/she is correct or incorrect and the application moves them onto the next div with the next question. When finished, users are able to add their scores and their initials to the highscores page. 

    The highscores.html allows users to see their highscores which are retained by local storage. 

CSS Document: 
    The style.css document provides the styling of the page. It primarily includes the styling for the navigation bar, the buttons, the divs, and provides the responsive components of the page. 

JS Document: 
    The questions.js document provides variables and functions for the interactive elements on the page, from the changing divs to the input to local storage. The quiz questions and answers have been stored here in objects and arrays, which are then rendered onto the page through the functions of this document. The timer and its functions are also housed here. 