// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 120;
var intervalId;
var showQuestion;

// Questions
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

console.log(q1.a);

// Start button on click starts the game
$("#start").click(startGame);

// One question is shown at a time


// Time remaining is 30 seconds per question
function startNumber(){
    number--;
    //  Once number hits zero...
    if (number === 0) {
        //  Alert the user that time is up.
        alert("Time Up!");
      }
}


function startGame() {
    $("#show-number").html("<h2>Time remaining: " + number + " Seconds</h2>");
    $('#question').html('<p>' + q1.q + '</p>');
    $('#correctanswer').html('<p>' + q1.a + '</p>');
    $('#wronganswers').append('<p>' + q1.w1 + '</p>');
    $('#wronganswers').append('<p>' + q1.w2 + '</p>');
    $('#wronganswers').append('<p>' + q1.w3 + '</p>');
}

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(startNumber, 1000);
  }

run();

// If click answer, shows a message that says correct and add count to correct

$('#correctanswer').on("click", function(){
    alert("That is the right answer!");
    correct++;
})

$('#wronganswers').on("click", function(){
    alert("Nope sorry!");
    incorrect++;
})


// Press start, opens game / starts counter (120 seconds)

// Regardless if answer all questions, says "All done" tells you correct, incorrect, and unanswered

// 8 Questions can only select one answer per question

// Hit done button and goes to "All done" page