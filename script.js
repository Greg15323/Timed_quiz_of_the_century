var questions = [{
    title:,
    choices:,
    answer:
},
{
    title:,
    choices:,
    answer:
},
{
    title:,
    choices:,
    answer:
},
{
    title:,
    choices:,
    answer:
},
{
    title:,
    choices:,
    answer:
}
]

var score = 0;
var currentQuestions = -1;
var timeLeft = 0;
var timer ;

function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}, 1000);

next();
}

function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>All done!</h2>
    <h3>Your final score is ` + score + ` /100!<h3>
    <input type="text" id="name" placeholder="Enter Initials">
    <button onclick="setScore()">Set Score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}

function getScore() {
var quizContent = `
<h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
<button onclick="clearScore()">Reset score!</button><button onclick="resetGame()">Start over!</button>
    
`;
    
document.getElementById("quizBody").innerHTML = quizContent;
}