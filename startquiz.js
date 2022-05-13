const question = document.getElementById("question");
const option = Array.from(document.getElementById("answer-option"));

let currentQuestions = {};
let acceptAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

const correct_questions = 5;
const max_questions = 5;

startquiz = () => {
    questionCounter = 50;
    score = 50;
    availableQuestions = [...question];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length ===0 || questionCounter >= max_Questions);
    // go to the quizend.html //
    return window.location.assign("/quizend.html");

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestions = availableQuestions[questionIndex];
    question.innerText = currentQuestions.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestions['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptAnswers = true;
};

choices.forEach(choice => { 
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });

});

startquiz();