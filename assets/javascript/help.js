// Trimmed to just the essential bits

$(document).ready(function(){

var questionsObj = {
	question1: {
		tagline: "Man is the warmest place to hide",
		answer1: "Alien",
		answerCorrect: "The Thing",
		answer3: "Shaun of the Dead"

	}
}

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
});

function clickMe(event) {
    var userSelect = $(event.target).text();
    // Line 44 throws an error "Uncaught ReferenceError: questionsObj is not defined"=====
	if(userSelect == questionsObj.question1.answerCorrect) {
		console.log('Correct');		
    } else {
    	console.log('Incorrect');
    	
    }
}