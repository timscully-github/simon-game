var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColor = buttonColors[randomNumber];

function nextSequence() {
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  $(".btn").click(function() {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
  });

}

function playSound(name) {
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

  $(".btn").click(function() {
    var userChosenColor = $(this).attr('id');
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
  });
}

function animatePress(currentColor) {
  $(".btn").click(function() {
    $(this).addClass("pressed");
  });
}

nextSequence();
playSound();
animatePress();
