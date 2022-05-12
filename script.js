// Create Question and Answers Query // 

let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choice1: "<strings>",
    choice2: "<booleans>",
    choice3: "<alerts>",
    choice4: "<numbers>",
    answer: 2
  },
  {
    question: "The condition in an if/else statement is enclosed within______:",
    choice1: "<quotes>",
    choice2: "<curly brackets>",
    choice3: "<parenthesis>",
    choice4: "<square brackets>",
    answer: 3
  },
  {
    question: "Arrays in Javascript can be used to store:",
    choice1: "<numbers and strings>",
    choice2: "<other arrays>",
    choice3: "<booleans>",
    choice4: "<all of the above>",
    answer: 4
  },
  {
    question: "String values must be enclosed within_____ when being assigned to variables:",
    choice1: "<commas>",
    choice2: "<curly brackets>",
    choice3: "<quotes>",
    choice4: "<parenthesis>",
    answer:3
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "<Javascript>",
    choice2: "<terminal / bash>",
    choice3: "<for loops>",
    choice4: "<console.log>",
    answer:1
  },
]

//Create const for storing data
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = document.getElementById("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores"));
console.log(highScores);
console.log(JSON.parse(localStorage.getItem("highScore")));
finalScore.innerText = document.getElementById("mostRecentScore")

