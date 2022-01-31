const video = document.querySelector('.player__video');
const playButton = document.querySelector('.toggle');
const volumeInput = document.querySelector('input[name=volume]');
const playbackRateInput = document.querySelector('input[name=playbackRate]');

const volumeHandler = () => {
  const volumeInputValue = volumeInput.value;
  video.volume = volumeInputValue;
};

const playbackRateHandler = () => {
  const playbackRateValue = playbackRateInput.value;
  video.playbackRate = playbackRateValue;
};


const playButtonHandler = () => {
  togglePlayButton();
  playPauseToggle();
}

const togglePlayButton = () => {
  const pausedState = playButton.innerHTML === '►';

  if (pausedState) {
    playButton.innerHTML = 'l l';
    playButton.style.fontWeight = 'bolder';
  } else {
    playButton.innerHTML = '►';
  }
};

const playPauseToggle = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const videoClickHandler = () => {
  playPauseToggle();
};

video.addEventListener('click', videoClickHandler);
playButton.addEventListener('click', playButtonHandler);

volumeInput.addEventListener('input', volumeHandler);
volumeInput.addEventListener('change', volumeHandler);

playbackRateInput.addEventListener('input', playbackRateHandler);
playbackRateInput.addEventListener('change', playbackRateHandler);
