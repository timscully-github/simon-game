var buttonColors = ["red","blue","green","yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];
  console.log(randomChosenColor);
}

nextSequence();
