var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
}

nextSequence();
