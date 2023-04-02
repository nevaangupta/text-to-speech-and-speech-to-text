function textToSpeach(message) {
    message=document.getElementById("text").value;
    const speach = new SpeechSynthesisUtterance(message);
    [speach.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(speach);
}

function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {
  
      var recognition = new webkitSpeechRecognition();
  
      recognition.continuous = false;
      recognition.interimResults = false;
  
      recognition.lang = "en-US";
      recognition.start();
  
      recognition.onresult = function(e) {
        document.getElementById('transcript').innerHTML = e.results[0][0].transcript;
        recognition.stop();
        document.getElementById('labnol').submit();
      };
  
      recognition.onerror = function(e) {
        recognition.stop();
      }
  
    }
  }