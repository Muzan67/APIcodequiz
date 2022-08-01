var body = documnet.body;
var currentQuestionIndex = -1;
var quizData = [


  
]


const startingSeconds = 50;
let time = startingSeconds * 50;

const countdownEl= document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown(){
  let seconds = time % 50;

  countdownEl.innerHTML = `${seconds}`;
  time--;
}

// const //

const startQuizBtn = document.getElementById('startquiz-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startQuizBtn.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 5
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// API Test Questions //

const questions = [
  {
    question: 'Commonly used data types DO NOT include?',
    answer: ['strings', 'booleans', 'alerts','numbers'],
    correctAnswer: 2
  },
  {
    question: 'The condition in an if/else statement is enclosed within______?',
    answer: ['quotes','curly brackets', 'parenthesis','square brackets'],
    correctAnswer: 2
  },
  {
    question: "<Arrays in Javascript can be used to store?",
    answer: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 3
  },
  {
    question: "String values must be enclosed within_____ when being assigned to variables?",
    answer: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    correctAnswer: 2
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is?",
    answer: ['Javascript', 'terminal / bash', 'for loops', 'console.log'],
    correctAnswer: 3
  },
]
 
