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
    <input type="text" id="name" placeholder="First Name">
    <button onclick="setScore()">Set Score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}