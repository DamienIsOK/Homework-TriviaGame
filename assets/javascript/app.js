// SEE LINES 156 - 164 for comments on where I am lost

$(document).ready(function(){

// Timer function. This counts down from 5, then stops and prints 'Time is up'

var number = 5;
var counter;
var firstQuestion = false;
var secondQuestion = false;
var thirdQuestion = false;
var fourthQuestion = false;
var fifthQuestion = false;

var timer = function(){
    counter = setInterval(decrement, 1000);
};

var stop = function(){
    clearInterval(counter);
};

var decrement = function(){
	// Just logging the results to make sure it works
    console.log(number--);
    $('#countdown').html('<h2> Seconds remaining: ' + number + '</h2>');
    if (number == 0){
        stop();
        console.log('Time is up!');
    }
};
		

// Object for storing my questions

var questionsObj = {
	question1: {
		tagline: "Man is the warmest place to hide",
		answer1: "Alien",
		answerCorrect: "The Thing",
		answer3: "Shaun of the Dead"

	},

	question2: {
		tagline: "Earth. It was fun while it lasted",
		answer1: "Mars Attacks!",
		answer2: "Independence Day",
		answerCorrect: "Armageddon"

	},

	question3: {
		tagline: "His story will touch you, even if he can't",
		answerCorrect: "Edward Scissorhands",
		answer2: "Powder",
		answer3: "The Boy in the Plastic Bubble"

	},

	question4: {
		tagline: "One man's struggle to take it easy",
		answerCorrect: "Ferris Bueller's Day Off",
		answer2: "The Big Lebowski",
		answer3: "Slackers"

	},

	question5: {
		tagline: "The last man on Earth is not alone",
		answerCorrect: "I Am Legend",
		answer2: "The Road",
		answer3: "The Book of Eli"

	},

	question6: {
		tagline: "You won't believe your eye",
		answer1: "Superman",
		answerCorrect: "Monsters, Inc.",
		answer3: "The Tree of Life"

	},

	question7: {
		tagline: "Are you watching closely?",
		answer1: "Now You See Me 2",
		answerCorrect: "The Prestige",
		answer3: "Oz the Great and Powerful"

	},
};

// Start function. Everything resets to here

startHere();

function startHere(){

$("#startButton")
	.hover(function(){
		$(this).css("background-color", "blue");
	}, function(){
		$(this).css("background-color", "red");
	});

}

// Question one

$("#startButton")
	.click(timer);
	firstQuestion = true;
		$(this).click(function(){
			$("#startButton").remove();
			$("#mainText")
				.html(	
					"<p>" + questionsObj.question1.tagline + "</p>" + 
					"<ul class='responses' onclick='clickMe(event)'>" + 
					"<li>" + questionsObj.question1.answer1 + "</li>" +
					"<li>" + questionsObj.question1.answerCorrect + "</li>" +
					"<li>" + questionsObj.question1.answer3 + "</li>" +
					"</ul>"
					);

		});

// Wrong answer page 1

var wrongAnswerPage1 = function(){
	$("#mainText").html(
	"<p> Wrong</p>"

	);
}

// Question two - DOES NOT WORK


$("#wrongAnswerPage1")
	.click(timer);
	firstQuestion = true;
		$(this).click(function(){
			$("#mainText")
				.html(	
					"<p>" + questionsObj.question2.tagline + "</p>" + 
					"<ul class='responses' onclick='clickMe(event)'>" + 
					"<li>" + questionsObj.question2.answer1 + "</li>" +
					"<li>" + questionsObj.question2.answer2 + "</li>" +
					"<li>" + questionsObj.question2.answerCorrect + "</li>" +
					"</ul>"
					);

		});

// Tried using an array to get the correct answer as a last result

var correctAnswers = ["The Thing", "Mars Attacks!", "Powder", "I Am Legend", "Superman", "The Prestige"];


// This function should say if the answer is in the array of correctAnswers. This is where I stopped. See line 165
// I tried seeing if the selected answer was named "answerCorrect" (from my object) but it did not work. See line 164

var function clickMe(event) {
    var userSelect = $(event.target).text();
	    // if(userSelect == questionsObj.question1.answerCorrect) {
    if((correctAnswers.indexOf(userSelect) >= 0) && (firstQuestion = true)) {
		console.log('That is correct #1');
		firstQuestion = false;
    } else {
		wrongAnswerPage1();
		secondQuestion = false;
	} {
    	// Run incorrectAnswer function
    } 
}



});



// $(document).on('click', '.responses', clickMe);
