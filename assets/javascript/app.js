// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 120;
var intervalId;
var showQuestion;
var start = $("#start");
var input = '<input type="radio" name="answer">';
var input2 = '<input type="radio" name="answer2">';


// Question objects
var q1 = {
    q: 'Who played Neo in The Matrix?',
    a: 'Keanu Reeves',
    w1: 'Denzel Washington',
    w2: 'Johnny Depp',
    w3: 'Tom Hanks'
};

var q2 = {
    q: 'BB-8 is an astromech droid from what film?',
    a: 'Alien',
    w1: 'Star Wars',
    w2: 'Nightmare on Elm Street',
    w3: 'E.T.'
};

var q3 = {
    q: 'What fictional city is the home of Batman?',
    a: 'Gateway City',
    w1: 'Gotham City',
    w2: 'The Hidden City',
    w3: 'Zenith City'
};

// Press start, opens game / starts counter (120 seconds)
start.click(startGame);

// Time remaining is 120 seconds for entire game
function startTimer() {
    number--;
    $("#timer").html("<h2>Time remaining: " + number + " Seconds</h2>");
    if (number === 0) {
        alert("Time Up!");
    }
}


function startGame() {
    // Start timer
    run();
    // Remove Start button
    start.remove();
    $('#question').append('<h2>#1: ' + q1.q + '</h2>');
    $('#correctanswer').append(input + q1.a);
    $('#wronganswers').append(input + q1.w1);
    $('#wronganswers').append(input + q1.w2);
    $('#wronganswers').append(input + q1.w3);
    $('#question2').append('<h2>#2: ' + q2.q + '</h2>');
    $('#correctanswer2').append(input2 + q2.a);
    $('#wronganswers2').append(input2 + q2.w1);
    $('#wronganswers2').append(input2 + q2.w2);
    $('#wronganswers2').append(input2 + q2.w3);
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
}

// If click answer, shows a message that says correct and add count to correct

// $('#correctanswer').on("click", function() {
//     alert("That is the right answer!");
//     correct++;
// })

// $('#wronganswers').on("click", function() {
//     alert("Nope sorry!");
//     incorrect++;
// })

// Regardless if answer all questions, says "All done" tells you correct, incorrect, and unanswered

// 8 Questions can only select one answer per question

// Hit done button and goes to "All done" page