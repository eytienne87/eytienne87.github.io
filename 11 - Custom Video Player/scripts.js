const video = document.querySelector('.player__video');
const playButton = document.querySelector('.toggle');
const volumeInput = document.querySelector('input[name=volume]');
const playbackRateInput = document.querySelector('input[name=playbackRate]');
const minusSecondsButton = document.querySelector("button[data-skip='-10']");
const addSecondsButton = document.querySelector("button[data-skip='25']");
const progressBarFilled = document.querySelector('.progress__filled');
const progressBar = document.querySelector('.progress')

const progressHandler = (event) => {
  const progressBarLength = progressBar.offsetWidth;
  const areaClicked = event.offsetX;
  const videoDuration = video.duration;

  // Update the yellow progress bar based on where the user clicked
  const percentageOfBarClicked = (Math.round(((areaClicked / progressBarLength) * 100) * 10) / 10);
  progressBarFilled.style.flexBasis = `${percentageOfBarClicked}%`;

  // Update the current time of the video based on the click
  const timestamp = (percentageOfBarClicked / 100) * videoDuration;
  video.currentTime = timestamp;
};


const progressBarHandler = () => {
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percentageTimeElapsed = (Math.round(((currentTime / duration) * 100) * 10) / 10);
  progressBarFilled.style.flexBasis = `${percentageTimeElapsed}%`
};

const addButtonHandler = () => {
  video.currentTime += 25
}

const minusButtonHandler = () => {
  video.currentTime -= 10;
};

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
  const playButtonIcon = event.currentTarget.paused ? '►' : '❚ ❚';
  playButton.innerHTML = playButtonIcon;
};

const playPauseToggle = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

video.addEventListener('click', playPauseToggle);
playButton.addEventListener('click', playButtonHandler);

video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);

volumeInput.addEventListener('input', volumeHandler);
volumeInput.addEventListener('change', volumeHandler);

playbackRateInput.addEventListener('input', playbackRateHandler);
playbackRateInput.addEventListener('change', playbackRateHandler);

minusSecondsButton.addEventListener('click', minusButtonHandler);
addSecondsButton.addEventListener('click', addButtonHandler);

video.addEventListener('timeupdate', progressBarHandler);

progressBar.addEventListener('click', progressHandler)
