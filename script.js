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