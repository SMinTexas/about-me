var myStoryButton = document.getElementById('myStory');
var myFamilyButton = document.getElementById('myFamily');
var myInterestsButton = document.getElementById('myInterests');
//var myModelsButton = document.getElementById('scaleModels');
var myAggiesButton = document.getElementById('myAggies');


var myHeading = document.querySelector('h1');



myStoryButton.onclick = function() {
	myHeading.textContent = 'This is my story';
}