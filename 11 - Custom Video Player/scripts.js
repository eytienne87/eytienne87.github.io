const video = document.querySelector('.player__video');
const playButton = document.querySelector('.toggle');



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
}

const videoClickHandler = () => {
  playPauseToggle();
};

video.addEventListener('click', videoClickHandler);
playButton.addEventListener('click', playButtonHandler);
