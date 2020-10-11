var questions = [{
    title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["1. last", "2. put", "3. push", "4. pop"],
    answer: "3. push"
},
{
    title: "Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ["1. add", "2. concat", "3. merge", "4. append"],
    answer: "2. concat"
},
{
    title: "Which of the following function of an array object adds and/or removes elements from an array?",
    choices: ["1. toSource", "2. sort", "3. unshift", "4. splice"],
    answer: "4. splice"
},
{
    title: "Which built-in method returns the characters in a string beginning at the specified location?",
    choices: ["1. substr", "2. getSubstring", "3. slice", "4. None of the above."],
    answer: "1 .substr"
},
{
    title: "Which of the following function of an array object adds one or more elements to the front of an array and returns the new length of the array?",
    choices:["1. unshift", "2. sort", "3. splice", "4. toString"],
    answer: "1. unshift"
}
]

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

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

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");
    
    resetGame();
    };

function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
        
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
var quizContent = `
<h1>
 Coding Quiz Challenge!
 </h1>
 <h4>
  Try to answer correctly and get the high score!
 </h4>
 <h3>
  Click to start!
 </h3>
 <button onclick="start()">Start!</button>`;

 document.getElementById("quizBody").innerHTML = quizContent;
}

function incorrect() {
    timeLeft -= 10; 
    next();
}

function correct() {
    score += 20;
    next();
}

function next() {
currentQuestion++;
    
    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
}
    
    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"
    
    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
}
    
    
    document.getElementById("quizBody").innerHTML = quizContent;
}

    