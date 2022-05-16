// countdown timer //
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
    answer: [
    { choice1: 'strings', correct: false },
    { choice2: 'booleans', correct: true },
    { choice3: 'alerts', correct: false },
    { choice4: 'numbers', correct: false },
    ]
  },
  {
    question: 'The condition in an if/else statement is enclosed within______?',
    answer: [
    { choice1: 'quotes', correct: false },
    { choice2: 'curly brackets', correct: false },
    { choice3: 'parenthesis', correct: true },
    { choice4: 'square brackets', correct: false },
    ]
  },
  {
    question: "<Arrays in Javascript can be used to store?",
    answer: [
    { choice1: 'numbers and strings', correct: false },
    { choice2: 'other arrays', correct: false },
    { choice3: 'booleans', correct: false },
    { choice4: 'all of the above', correct: true },
    ]
  },
  {
    question: "String values must be enclosed within_____ when being assigned to variables?",
    answer: [
    { choice1: 'commas', correct: false },
    { choice2: 'curly brackets', correct: false },
    { choice3: 'quotes', correct: true },
    { choice4: 'parenthesis', correct: false },
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is?",
    answer: [
    { choice1: 'Javascript', correct: true },
    { choice2: 'terminal / bash', correct: false },
    { choice3: 'for loops', correct: false },
    { choice4: 'console.log', correct: false },
    ]
  }
]
 
