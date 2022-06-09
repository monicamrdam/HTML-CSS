window.onload = function() {
//variables
const restartBtn= document.getElementById('restart');
const prevtBtn= document.getElementById('prev');
const nexttBtn= document.getElementById('next');
const submitBtn= document.getElementById('submit');
const trueBtn= document.getElementById('true');
const falsetBtn= document.getElementById('false');
const userScore= document.getElementById('user-score');
const questionText= document.getElementById('question-text');


let currentQuestion=0;
var score=0;
var data ="";


//Function read json
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/javaScript/data.json", function(text){
    data = JSON.parse(text);
    
    console.log(data);
    beginQuiz();
});



//events
//restartBtn.addEventListener('click', restart);
//prevtBtn.addEventListener('click', prev);
//nexttBtn.addEventListener('click', next);
//submitBtn.addEventListener('click', submit);

//executed when the page loads and the script gets executed

function beginQuiz(){
    currentQuestion=0;
    var datos=data.questions[currentQuestion].question;
    console.log( datos);
    questionText.innerHTML =datos;
}


//reset the score
function restart(){
    currentQuestion=0;
    prevtBtn.classList.remove('hide');
    nexttBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falsetBtn.classList.remove('hide');
    score=0;
    userScore.innerHTML = score;
    beginQuiz();
}


   
}
