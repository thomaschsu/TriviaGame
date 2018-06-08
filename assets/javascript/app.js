// Bugs list:
// 1. Capture value of input
// 2. If value = to ca then mark as correct, else mark as wrong
// 3. Fix end game button
// 4. Remove repeated code

// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 120;
var intervalId;
var showQuestion;
var start = $('#start');
var end = $('#end');
var instructions = $('#instructions');
var input1 = "";
var input2 = "";
var input3 = "";
var input4 = "";
var input5 = "";
var input6 = "";
var input7 = "";
var input8 = "";
var radioInput = '<input type="radio" '

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
    a: ['Gateway City', 'The Hidden City', 'Zenith City', 'Gotham City'],
    ca: 'Gotham City'
};

var q4 = {
    q: 'Which actress played Katniss Everdeen in "The Hunger Games"?',
    a: ['Anne Hathaway', 'Kate Winslet', 'Jennifer Lawrence', 'Natalie Portman'],
    ca: 'Jennifer Lawrence'
};

var q5 = {
    q: 'Which movie features Bruce Willis as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve?',
    a: ['Jingle All the Way', 'Die Hard', 'The Santa Clause', 'Jack Frost'],
    ca: 'Die Hard'
};

var q6 = {
    q: 'Which Tom Hanks movie won the Academy Award for Best Picture in 1994?',
    a: ['Forrest Gump', 'Cast Away', 'The Terminal', 'The Green Mile'],
    ca: 'Forrest Gump'
};

var q7 = {
    q: 'What was the name of the monkey in the Disney movie "Aladdin"?',
    a: ['Gazeem', 'Jasmine', 'Jafar', 'Abu'],
    ca: 'Abu'
};

var q8 = {
    q: 'Bruce Willis played a convict turned time traveler in what 1995 movie?',
    a: ['Die Hard 3', 'The Sixth Sense', '12 Monkeys', 'Looper'],
    ca: '12 Monkeys'
};

// Add values to answers
for (var i = 0; i < 4; i++) {
    input1 += radioInput + 'name="answer"' + 'id="' + q1.a[i] + '"' + 'value="' + q1.a[i] + '">';
    input1 += '<label for="' + q1.a[i] + '">'+ q1.a[i] + '</label>';
    input2 += radioInput + 'name="answer2"' + 'id="' + q2.a[i] + '"' + 'value="' + q2.a[i] + '">';
    input2 += '<label for="' + q2.a[i] + '">'+ q2.a[i] + '</label>';
    input3 += radioInput + 'name="answer3"' + 'id="' + q3.a[i] + '"' + 'value="' + q3.a[i] + '">';
    input3 += '<label for="' + q3.a[i] + '">'+ q3.a[i] + '</label>';
    input4 += radioInput + 'name="answer4"' + 'id="' + q4.a[i] + '"' + 'value="' + q4.a[i] + '">';
    input4 += '<label for="' + q4.a[i] + '">'+ q4.a[i] + '</label>';
    input5 += radioInput + 'name="answer5"' + 'id="' + q5.a[i] + '"' + 'value="' + q5.a[i] + '">';
    input5 += '<label for="' + q5.a[i] + '">'+ q5.a[i] + '</label>';
    input6 += radioInput + 'name="answer6"' + 'id="' + q6.a[i] + '"' + 'value="' + q6.a[i] + '">';
    input6 += '<label for="' + q6.a[i] + '">'+ q6.a[i] + '</label>';
    input7 += radioInput + 'name="answer7"' + 'id="' + q7.a[i] + '"' + 'value="' + q7.a[i] + '">';
    input7 += '<label for="' + q7.a[i] + '">'+ q7.a[i] + '</label>';
    input8 += radioInput + 'name="answer8"' + 'id="' + q8.a[i] + '"' + 'value="' + q8.a[i] + '">';
    input8 += '<label for="' + q8.a[i] + '">'+ q8.a[i] + '</label>';
}

// Press start, opens game / starts counter (120 seconds)
start.click(startGame);

// Press end button, ends counter and game

// Hides results & timer
$('#results').hide();
$('#timer').hide();
$('#question-container').hide();
$('#end').hide();

// Time remaining is 120 seconds for entire game
function startTimer() {
    number--;
    $("#timer").html("<h2>Time remaining: " + number + " Seconds</h2>");
    // When time hits 0, show results and remove everything else
    if (number === 0) {
        $('#question-container').remove();
        $('#timer').remove();
        $('#results').show();
    }
}

function startGame() {
    // Start timer
    run();
    $('#timer').show();
    $('#question-container').show();
    $('#end').show();
    // Remove Start button
    start.remove();
    // Remove instructions
    instructions.remove();
    // Append questions, answers
    $('#question').append('<h3>#1: ' + q1.q + '</h3>');
    $('#answer').append(input1);
    $('#question2').append('<h3>#2: ' + q2.q + '</h3>');
    $('#answer2').append(input2);
    $('#question3').append('<h3>#3: ' + q3.q + '</h3>');
    $('#answer3').append(input3);
    $('#question4').append('<h3>#4: ' + q4.q + '</h3>');
    $('#answer4').append(input4);
    $('#question5').append('<h3>#5: ' + q5.q + '</h3>');
    $('#answer5').append(input5);
    $('#question6').append('<h3>#6: ' + q6.q + '</h3>');
    $('#answer6').append(input6);
    $('#question7').append('<h3>#7: ' + q7.q + '</h3>');
    $('#answer7').append(input7);
    $('#question8').append('<h3>#8: ' + q8.q+ '</h3>');
    $('#answer8').append(input8);
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
}

// Count amount of correct, incorrect, and unanswered questions
$('#results').html("<h2>All done!</h2>");
$('#results').append("<h2>Correct Answers: " + correct + "</h2>");
$('#results').append("<h2>Incorrect Answers: " + incorrect + "</h2>");
$('#results').append("<h2>Unanswered: " + unanswered + "</h2>");

// Regardless if answer all questions, says "All done" tells you correct, incorrect, and unanswered

// Hit done button and goes to "All done" page