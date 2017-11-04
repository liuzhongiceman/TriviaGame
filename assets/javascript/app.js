var seconds = 60;
function secondPassed(){
	var minutes = Math.round ((seconds -30) / 60);
	var remainingSeconds = seconds % 60;

	if(remainingSeconds <10){
		remainingSeconds = "0"+ remainingSeconds;
	}

	document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;

	if(seconds == 0){
		clearInterval(countdownTimer);
		document.getElementById('countdown').innerHTML = "Time is Out";
	}

	else {
		seconds --;
	}
}
 var countdownTimer = setInterval('secondPassed()', 1000);




function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

	if (question1 == "Hakeem Olajuwon & Sam Bowie") {
		correct++;
	}
	

	if (question2 == "Larry Brown") {
		correct++;
	}	
	
	if (question3 == "Earl Lloyd") {
		correct++;
	}	

	
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

	}



	


	


