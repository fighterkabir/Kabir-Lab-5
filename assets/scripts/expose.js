// expose.js

window.addEventListener('DOMContentLoaded', init);
const audio = document.querySelector("audio");
const jsConfetti = new JSConfetti();


function init() {

  changeMainImageAndAudio();
  manipulateVolume();
  handleButtonPress();
}

function changeMainImageAndAudio() {

  var dropDownMenu = document.getElementById("horn-select");
  dropDownMenu.addEventListener("change", function() {

    var selectedHorn = dropDownMenu.value;
    var image = document.querySelector("#expose > img");

    
    if (selectedHorn == 'air-horn'){

      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";

    } else if (selectedHorn == 'car-horn') {

      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";

    } else if (selectedHorn == 'party-horn'){

      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";

    } else{
      audio.src = "";
    }

  });
}

function manipulateVolume() {

  var volumeSlider = document.getElementById("volume");
  var audio = document.querySelector("audio");

  volumeSlider.addEventListener("input", function() {

    var userVolumeValue = volumeSlider.value;
    var volumeIcon = document.querySelector("#volume-controls img");
    if (userVolumeValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      audio.volume = userVolumeValue / 100;
    } else if (userVolumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      audio.volume = userVolumeValue / 100;
    } else if (userVolumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      audio.volume = userVolumeValue / 100;
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      audio.volume = userVolumeValue / 100;
    }

    
  })
}

function handleButtonPress() {

  var playButton = document.querySelector("button")
  playButton.addEventListener("click", function() {

    var currentHorn = document.getElementById("horn-select").value;
    if (currentHorn == "party-horn") {
      jsConfetti.addConfetti();
    }

    console.log(audio.volume);
    audio.play();
  })
  
}
