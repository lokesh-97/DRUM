document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

for (i = 0; i < 8; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", playAudio);

}
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
    case "j":
      var crash = new Audio("sounds/crash.mp3")
      crash.play();
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3")
      kickBass.play();
    case "l":
      var snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;
    default:console.log(innerHTML)

  }
}
function playAudio() {
  var buttoninnerhtml = this.innerHTML;
  makeSound(buttoninnerhtml);
  buttonAnimation(buttoninnerhtml);
}
function buttonAnimation(currentKey){
  var activebutton = document.querySelector("."+currentKey);
  activebutton.classList.add('pressed');
  setTimeout(function(){
    activebutton.classList.remove('pressed');
  },100)
}
