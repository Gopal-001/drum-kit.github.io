var noOfButtons = document.querySelectorAll(".drum").length;
for ( var i=0 ; i<noOfButtons ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    handleClick(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    // buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown",function (event)
{
  handleClick(event.key);
  buttonAnimation(event.key);
  // buttonAnimation(event.key);
});


function handleClick(buttonInnerHtml) {
  var audio;
  switch (buttonInnerHtml) {
    case "e": audio = new Audio("sounds/tom-1.mp3");
      break;
    case "s": audio = new Audio("sounds/tom-2.mp3");
      break;
    case "d": audio = new Audio("sounds/tom-3.mp3");
      break;
    case "f": audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j": audio = new Audio("sounds/snare.mp3");
      break;
    case "k": audio = new Audio("sounds/crash.mp3");
      break;
    case "l": audio = new Audio("sounds/kick-bass.mp3");
      break;
    default: console.log(buttonInnerHtml);
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);
}
