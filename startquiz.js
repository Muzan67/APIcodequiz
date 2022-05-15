const questions = document.getElementById('questions');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 50;
let questionCounter = 0;
let availableQuestions = [];

let question = [
    {
      question: 'Commonly used data types DO NOT include:',
      choice1: '<strings>',
      choice2: '<booleans>',
      choice3: '<alerts>',
      choice4: '<numbers>',
      answer: 2
    },
    {
      question: 'The condition in an if/else statement is enclosed within______:',
      choice1: '<quotes>',
      choice2: '<curly brackets>',
      choice3: '<parenthesis>',
      choice4: '<square brackets>',
      answer: 3
    },
    {
      question: "<Arrays in Javascript can be used to store:",
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
  ];
  
const correct_question = 10;
const max_question = 5;

startquiz = () => {
    questionCounter = 50;
    score = 50;
    availableQuestions = [...question];
    getNewQuestions();
};

getNewQuestion = () => {
    if(availableQuestions.length ===0 || questionCounter >= max_question) {
        return window.location.assign('/quizend.html');
    }
   questionCounter++;
   const questionIndex = Math.floor(Math.random() * availableQuestion.length);
   currentQuestion = availableQuestion[questionIndex];
   question.innerText = currentQuestion.question;

   choices.forEach((choice) => {
     const number = choice.dataset['number'];
     choice.innerText = currentQuestion['choice' + number];
    });

   availableQuestions.splice(questionIndex, 1);
   acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
       if(!acceptingAnswers) return;

       acceptingAnswers = false;
       const selectedChoice = e.target;
       const acceptingAnswers = selectedChoice.dataset['number'];
       getNewQuestion();
    });
});

startquiz();