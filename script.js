// const portions

const _question = document.getElementById('question');
const _options = document.getElementById('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
const _checkButton = document.getElementById('check-answer');
const _playAgainButton = document.getElementById('play-again');
const _result = document.getElementById('result');

let correctAnswer = "", correctScore = askedCount = 0, _totalQuestion = 5;

function eventListeners(){
  _checkButton.addEventListener('click', checkAnswer);
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
  eventListeners();
  _totalQuestion.textContent = _totalQuestion;
  _correctScore.textContent = correctScore;
})