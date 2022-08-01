var body = document.body;
var currentQuestionIndex = -1;
var quizData = [
  // API Questions with Answers //
  {
    question: "Commonly used data types DO NOT include?",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },
  {
    question: "The condition in an if/else statement is enclosed within______?",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: 2,
  },
  {
    question: "<Arrays in Javascript can be used to store?",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "String values must be enclosed within_____ when being assigned to variables?",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is?",
    answers: ["Javascript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: 3,
  },
];

var time = 60;
var timer;
var display = document.querySelector("#time");

// Local Storage //
if (localStorage.getItem("highScores")) {
  localStorage.setItem("highScores", JSON.stringify([]));
}

// Highscore page
if (window.location.pathname === "../highscores.html") {
  let scores = JSON.parse(localStorage.getItem("highScores"));
  let scoreBoard = document.querySelector("#scoreBoard");
  for (let i = 0; i < scores.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = scores[i].name + "-" + scores[i].score;
    scoreBoard.appendChild(liEl);
  }
}

// Clear Highscores //
var clearBtn = document.getElementById("clearHighScores");
var goBackBtn = document.getElementById("goBack");

if (clearBtn) {
  clearBtn.addEventListener("click, clearScores");
  console.log("clear button");
  function clearScores() {
    localStorage.setItem("highScores", JSON.stringify([]));
    // Clear the list of high scores on the screen
    console.log("scoreBoard");
    let scoreBoardEl = document.getElementById("scoreBoard");
    scoreBoardEl.innerHTML = "";
  }
}

if (goBackBtn) {
  goBackBtn.addEventListener("click", function () {
    window.open(".index.html");
  });
} else {
  // local storage ends

  // start quiz
  var startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    var firstMessage = document.getElementById("start-quiz");
    firstMessage.style.display = "none";
    timer = setInterval(startTimer, 1000);
    showQuestion();
  }

  // Timer Start //
  function startTimer() {
    time = time - 1;
    display.textContent = time;
    if (time <= 0) {
      doneGame();
    }
  }
  // Timer End //

  // start questions //
  function showQuestion() {
    if (currentQuestionIndex >= 4) {
      return doneGame();
    }
    currentQuestionIndex++;
    console.log("currentQuestionIndex", currentQuestionIndex);

    var currentQuestionData = quizData[currentQuestionIndex];
    // add a list of question 1 answers start
    var dataTypes = document.createElement("h1");
    var listEl = document.createElement("ol");
    listEl.addEventListener("click", function (e) {
      checkChoice(e);
    });
    var li1 = document.createElement("li");
    li1.setAttribute("id", "choice1");
    var li2 = document.createElement("li");
    li2.setAttribute("id", "choice2");
    var li3 = document.createElement("li");
    li3.setAttribute("id", "choice3");
    var li4 = document.createElement("li");
    li4.setAttribute("id", "choice4");

    dataTypes.textContent = currentQuestionData.question;
    li1.textContent = currentQuestionData.answers[0];
    li2.textContent = currentQuestionData.answers[1];
    li3.textContent = currentQuestionData.answers[2];
    li4.textContent = currentQuestionData.answers[3];

    // dataTypes.setAttributes("style", "font-size:20px");
    // listEl.setAttributes("style", "background: ;"padding: 20px");
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";
    questionContainer.appendChild(dataTypes);
    dataTypes.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
  }
  // show each question End
  var correctAnswerCounter = 0;

  // create a function named checkAnswer get whatthe user selected, use the correct answer in currentQuestionData to compare then continue
  function checkChoice(e) {
    let currentQuestionData = quizData[currentQuestionIndex];
    let correctChoiceIndex = currentQuestionData.correctAns;
    let correctChoiceText = currentQuestionData.answers[correctChoiceIndex];
    // console.log(correctChoiceText);
    let result = document.createElement("p");
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.appendChild(result);
    if (e.target.textContent === correctChoiceText) {
      correctAnswerCounter++;
      result.textContent = "Correct!";
    } else {
      result.textContent = "Wrong!";
      time -= 10;
    }
    setTimeout(showQuestion, 1000);
  }

  // Done game page Star //
  function doneGame() {
    clearInterval(timer);
    var yourFinalScore = document.querySelector(".finalScore");
    var doneGameScreen = document.querySelector("done");
    doneGameScreen.style.display = "block";
    var hideQuestions = document.querySelector("#questionContainer");
    hideQuestions.style.display = "none";
    yourFinalScore.textContent = `Your final score is ${time}`;
    highScores();
  }

  function highScores() {
    var submitScores = document.querySelector("#submitBtn");
    submitScores.addEventListener("click", function () {
      // capture initials, save to local storage, and go to highscores page
      let initialsEl = document.querySelector("#initials");
      let initials = initialsEl.value;
      let localScores = JSON.parse(localStorage.getItem("highScores"));
      localScores.push({
        name: initials,
        score: time,
      });
      localStorage.setItem("highSores", JSON.stringify(localScores));
      window.open("./highscores.html");
    });
  }
}
