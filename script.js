// const portions

const _question = document.getElementById('question');
const _options = document.getElementById('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
const _checkButton = document.getElementById('check-answer');
const _playAgainButton = document.getElementById('play-again');
const _result = document.getElementById('result');

let correctAnswer = "", correctScore = askedCount = 0, _totalQuestion = 5;

// event listener // 
function eventListeners(){
  _checkButton.addEventListener('click', checkAnswer);
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
  eventListeners();
  _totalQuestion.textContent = _totalQuestion;
  _correctScore.textContent = correctScore;
})

// display question and options //

function showQuestion(data){
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answers;
  let optionsList = incorrectAnswer;
  optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);

question.innerHTML = `${data.question} <br> <span class = "category'>${data.category} </span>`;
_options.innerHTML = `
    ${optionsList.map((option, index) => 
      <li> ${index + 1}. <span> ${option} </span></li>
      ).join('')}`;

      selectedOption();

}

// options selection // 
function selectedOption(){
  _options.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', () => {
      if(_options.querySelector('.selected')){
        const activeOption = _options.querySelector('selected');
        activeOption.classList.remove('selected');
      }
      option.classList.add('selected');
    });
  });

}

function eventListeners(){
  _checkButton.addEventListener('click', checkAnswer);
}

// check answers // 
function checkAnswer(){
  _checkButton.disabled = true;
  if(_options.querySelector('.selected')){
      let selectedAnswer = _options.querySelector('.selected span').textContent;
      if(selectedAnswer == correctAnswer){
        correctScore++;
        _result.innerHTML = `<p> <i class = "fas fa-check"></i>Correct Answer! </P>`;
      };
  };

}