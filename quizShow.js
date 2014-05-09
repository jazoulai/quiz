/**
 * Created by jazoulai on 5/8/14.
 */
var Questions = [
    {
        question: "What city where you born in?",
        choices: [
            "San Antonio",
            "Brooklyn",
            "Chicago",
            "New Paltz"
        ],
        correctAnswer: 1
    },
    {
        question: "What planet are you from?",
        choices: [
            "Mars",
            "Venus",
            "Saturn",
            "Earth"
        ],
        correctAnswer: 3
    },
    {
        question: "What is 3 + 7?",
        choices: [
            6,
            9,
            10,
            -1
        ],
        correctAnswer: 2
    }
];

var questionDiv = document.getElementById("question");
var choiceDiv = document.getElementById("choices");
var button = document.getElementById('next');
var i = -1;

function next() {
    if (i < Questions.length - 1) {

        i++;

        questionDiv.innerHTML = Questions[i].question;
        var choice = Questions[i].choices;
        choiceDiv.innerHTML = '';

        choice.forEach(function(e){
            var listItem = document.createElement('input');
            var label = document.createElement('label');
            var brake = document.createElement('br');
            listItem.setAttribute('type', 'radio');
            listItem.setAttribute('name', 'multi');
            listItem.setAttribute('id', e);
            label.setAttribute('for', e);
            label.innerHTML = e;
            choiceDiv.appendChild(listItem);
            choiceDiv.appendChild(label);
            choiceDiv.appendChild(brake);
        });
    }
}

next();

button.onclick = function () {
    next();
};
