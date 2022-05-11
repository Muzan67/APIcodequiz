//Create const for storing data
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = document.getElementById("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores"));
console.log(highScores);
console.log(JSON.parse(localStorage.getItem("highScore")));
finalScore.innerText = document.getElementById("mostRecentScore")

