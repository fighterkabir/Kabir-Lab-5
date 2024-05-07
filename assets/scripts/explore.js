// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {

  const synth = window.speechSynthesis;
  const inputTxt = document.getElementById("text-to-speak");
  var voiceSelect = document.querySelector("select");

  var voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  var speechButton = document.querySelector("button");

  speechButton.addEventListener("click", function() {

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener("start", function() {
      var img = document.querySelector("img");
      img.src = "assets/images/smiling-open.png";
    });

    utterThis.addEventListener("end", function() {
      var img = document.querySelector("img");
      img.src = "assets/images/smiling.png";
    })
    
    if (selectedOption != null) {
      synth.speak(utterThis);
    }

  }) 
  
}



