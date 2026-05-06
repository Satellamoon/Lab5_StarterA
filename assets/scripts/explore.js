// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voice-select');
let voices = [];

// Create voice list dropdown
function populateVoiceList() {
  voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement('option');

    option.textContent = `${voice.name} (${voice.lang})`;
    if (voice.default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);

    voiceSelect.appendChild(option);
  }
}

function init() {
  // TODO
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const img = document.querySelector('img');

  // button (plays sound + changes image)
  button.addEventListener('click', function() {
    const text = textInput.value;
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterance.voice = voices.find(voice => voice.name === selectedOption);

    utterance.onstart = (event) => {
      img.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = (event) => {
      img.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);

  });

}