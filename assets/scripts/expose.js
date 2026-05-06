// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // Horn selector (image change + set audio file)
  const hornSelect = document.getElementById('horn-select');
  const hornAudio = document.querySelector('audio');
  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    const hornImage = document.querySelector('img');
    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  });

  // Sound slider (icon change + set audio volume)
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.getElementById('volume-controls').querySelector('img');
  volumeSlider.addEventListener('input', function() {
    const volumeValue = volumeSlider.value;

    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 66) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    hornAudio.volume = volumeValue / 100;
  });

  // Play sound button (plays sound + confetti if party horn)
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', function() {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}