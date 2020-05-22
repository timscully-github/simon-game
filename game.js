var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = -1;

// detect button press
$(".btn").click(function() {

  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);

});

// create next in sequence for game
function nextSequence() {

  level++;

  $("h1").html("level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

console.log(userClickedPattern);
}


function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}

// know when game has started
var started = false;
$(document).keypress(function(event) {
  if (!started) {
      $("h1").html("level " + level);
      nextSequence();
      started = true;
  }
});

// check if user is successful during gamePattern
function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);

    }
  } else {
    started = false;
    $("h1").html("Game over at level " + level + " Refresh the page to restart");
  }
}
