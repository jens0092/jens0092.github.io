// As with the HTML and CSS, this is my pattern document for all the JS subpages. The rest only change the names and locations of the assets being accessed.
//We start by defining some key terms that will be used within our codeset.
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const title = document.getElementById('songtitle');
const cover = document.getElementById('cover');

// Song titles. These change for each of the subpages, but for each there is an mp3 and a jpg with a matching title in the relevant asset folder.
const songs = ['Moonlight Walk','Hoshi no Yakusoku','Returns'];

// Three songs means an index of 2! (0,1,2). I've made sure the song at 2 in the array matches the one that's preloaded into the HTML so that things display correctly.
let songIndex = 2;

// This is what brings my three songs into the HTML document where they can actually be used
loadSong(songs[songIndex]);

// And this is what actually explains that 'loadSong' means 'take one of the titles from the songIndex and attach it to the mp3 and jpg with the same title from the specified folder'
function loadSong(song) {
  title.innerText = song;
  audio.src = `../files-popi/${song}.mp3`;
  cover.src = `../files-popi/${song}.jpg`;
}

// The event listener here makes the play button function as a play/pause toggle when clicked
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Here's where we introduce our 'play' class, which is important for the EventListener above and also for some of our CSS. Here is also where we toggle how the play/pause button displays.
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// pauseSong is just the mirror of playSong
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Giving our other buttons their functionality
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Defining what that functionality IS -- we're incrementing where in the songIndex the code is reading from
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// As with play/pause, prevSong and nextSong are mirrors of each other
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// And we want the audio to advance at the end of a song even if the button isn't pressed -- so we set up another EventListener to cue off that.
audio.addEventListener('ended', nextSong);

