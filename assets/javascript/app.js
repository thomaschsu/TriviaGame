// Bugs list:
// 1. Capture value of input
// 2. Make value equal to the string of the answer
// 3. Create done button
// 4. Make conditional statement to count results
// 5. Make label for radio buttons
// 6. Remove Repeated code

// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 120;
var intervalId;
var showQuestion;
var start = $('#start');
var instructions = $('#instructions');
var inputBegin = '<input type="radio" '
var value1 = ' value="1">';
var value2 = ' value="2">';
var value3 = ' value="3">';
var value4 = ' value="4">';
var value5 = ' value="5">';
var value6 = ' value="6">';
var value7 = ' value="7">';
var value8 = ' value="8">';
var input1 = inputBegin + 'name="answer"' + value1;
var input2 = inputBegin + 'name="answer2"' + value2;
var input3 = inputBegin + 'name="answer3"' + value3;
var input4 = inputBegin + 'name="answer4"' + value4;
var input5 = inputBegin + 'name="answer5"' + value5;
var input6 = inputBegin + 'name="answer6"' + value6;
var input7 = inputBegin + 'name="answer7"' + value7;
var input8 = inputBegin + 'name="answer8"' + value8;
// <input type="radio" name="answer2" value=">

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

// Press start, opens game / starts counter (120 seconds)
start.click(startGame);

// Hides results & timer
$('#results').hide();
$('#timer').hide();
$('#question-container').hide();

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
    // Remove Start button
    start.remove();
    // Remove instructions
    instructions.remove();
    // Append questions, answers
    $('#question').append('<h3>#1: ' + q1.q + '</h3>');
    $('#answer').append(input1 + q1.a[0], input1 + q1.a[1], input1 + q1.a[2], input1 + q1.a[3]);
    $('#question2').append('<h3>#2: ' + q2.q + '</h3>');
    $('#answer2').append(input2 + q2.a[0], input2 + q2.a[1], input2 + q2.a[2], input2 + q2.a[3]);
    $('#question3').append('<h3>#3: ' + q3.q + '</h3>');
    $('#answer3').append(input3 + q3.a[0], input3 + q3.a[1], input3 + q3.a[2], input3 + q3.a[3]);
    $('#question4').append('<h3>#4: ' + q4.q + '</h3>');
    $('#answer4').append(input4 + q4.a[0], input4 + q4.a[1], input4 + q4.a[2], input4 + q4.a[3]);
    $('#question5').append('<h3>#5: ' + q5.q + '</h3>');
    $('#answer5').append(input5 + q5.a[0], input5 + q5.a[1], input5 + q5.a[2], input5 + q5.a[3]);
    $('#question6').append('<h3>#6: ' + q6.q + '</h3>');
    $('#answer6').append(input6 + q6.a[0], input6 + q6.a[1], input6 + q6.a[2], input6 + q6.a[3]);
    $('#question7').append('<h3>#7: ' + q7.q + '</h3>');
    $('#answer7').append(input7 + q7.a[0], input7 + q7.a[1], input7 + q7.a[2], input7 + q7.a[3]);
    $('#question8').append('<h3>#8: ' + q8.q+ '</h3>');
    $('#answer8').append(input8 + q8.a[0], input8 + q8.a[1], input8 + q8.a[2], input8 + q8.a[3]);
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