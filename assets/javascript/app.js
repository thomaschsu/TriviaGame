// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 120;
var intervalId;
var showQuestion;
var start = $('#start');
var input = '<input type="radio" name="answer">';
var input2 = '<input type="radio" name="answer2">';


// Questions
var q1 = {
    q: 'Who played Neo in The Matrix?',
    a: ['Keanu Reeves', 'Denzel Washington', 'Johnny Depp','Tom Hanks'],
    ca: 'Keanu Reeves'
};

var q2 = {
    q: 'BB-8 is an astromech droid from what film?',
    a: ['Alien', 'Star Wars', 'Nightmare on Elm Street', 'E.T.'],
    ca: 'Star Wars'
};

var q3 = {
    q: 'What fictional city is the home of Batman?',
    a: ['Gateway City', 'Gotham City', 'The Hidden City', 'Zenith City'],
    ca: 'Gotham City'
};

var q4 = {
    q: 'Which actress played Katniss Everdeen in "The Hunger Games"?',
    a: ['Jennifer Lawrence', 'Anne Hathaway', 'Kate Winslet', 'Natalie Portman'],
    ca: 'Jennifer Lawrence'
};

// Press start, opens game / starts counter (120 seconds)
start.click(startGame);

// Hides results
$('#results').hide();

// Time remaining is 120 seconds for entire game
function startTimer() {
    number--;
    $("#timer").html("<h2>Time remaining: " + number + " Seconds</h2>");
    if (number === 0) {
        $('#question-container').remove();
        $('#timer').remove();
        $('#results').show();
    }
}

function startGame() {
    // Start timer
    run();
    // Remove Start button
    start.remove();
    // Append questions, answers
    $('#question').append('<h2>#1: ' + q1.q + '</h2>');
    $('#correctanswer').append(input + q1.a);
    $('#question2').append('<h2>#2: ' + q2.q + '</h2>');
    $('#correctanswer2').append(input2 + q2.a);
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
}

// If click answer, shows a message that says correct and add count to correct
$('#correctanswer').focus(function() {
    correct++;
});


$('#wronganswers').on("click", function() {
    incorrect++;
});

$('#results').html("<h2>All done!</h2>");
$('#results').append("<h2>Correct Answers: " + correct + "</h2>");
$('#results').append("<h2>Incorrect Answers: " + incorrect + "</h2>");
$('#results').append("<h2>Unanswered: " + unanswered + "</h2>");

// Regardless if answer all questions, says "All done" tells you correct, incorrect, and unanswered

// 8 Questions can only select one answer per question

// Hit done button and goes to "All done" page