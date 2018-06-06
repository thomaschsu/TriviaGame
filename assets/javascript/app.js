// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Objects


// Functions
function startQuestion() {
    showDiv = setInterval(nextDiv, 3000);
}

// Game starts with a page that has start button
$("#start").click(startQuestion);

// Start button on click starts the game
// One question is shown at a time
// Time remaining is 30 seconds per question
// One questions, 4 answer multiple choice
// If unanswered, shows correct answer and goes to next question
// Automatically moves to next question
// Gif's on each question
// At the end tells you how many correct, incorrect, and unanswered
// Start over button on last page does not reload page, resets game