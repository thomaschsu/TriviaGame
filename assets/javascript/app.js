// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 30;
var intervalId;

// Questions
var q1 = {
    q: 'Who played Neo in The Matrix?',
    a: 'Keanu Reeves',
    w1: 'Denzel Washington',
    w2: 'Johnny Depp',
    w3: 'Tom Hanks'
};

console.log(q1.a1);

$('#question').html('<p>' + q1.q + '</p>');
$('#correctanswer').html('<p>' + q1.a + '</p>');
$('#answers').append('<p>' + q1.w1 + '</p>');
$('#answers').append('<p>' + q1.w2 + '</p>');
$('#answers').append('<p>' + q1.w3 + '</p>');

// Game starts with a page that has start button
$("#start").click(startGame);

// Start button on click starts the game
// function startGame() {
//     showDiv = setInterval(nextDiv, 3000);
// }

// One question is shown at a time


// Time remaining is 30 seconds per question
function decrement() {
    number--;
    $("#show-number").html("<h2>Time remaining: " + number + " Seconds</h2>");

    //  Once number hits zero...
    if (number === 0) {
      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

run();

// If click answer, shows a message that says correct and add count to correct

$('#correctanswer').on("click", function(){
    alert("That is the right answer!");
})

$('#answers').on("click", function(){
    alert("Nope sorry");
})

// One questions, 4 answer multiple choice

// If unanswered, shows correct answer and goes to next question

// Automatically moves to next question

// GIF's on each question

// At the end tells you how many correct, incorrect, and unanswered

// Start over button on last page does not reload page, resets game