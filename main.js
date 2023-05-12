import './src/styles/style.css'
import {songComponent} from './src/components'
import {getData} from './src/services'
import { removeAllChild, useLocalstorage } from './src/utils';

const tracklist = document.querySelector('#container2');
const currentSong = document.getElementById('current_song');
const storage = useLocalstorage('current_song');


getData((song) => {
  removeAllChild(tracklist);
  
  song.map((div) => {
    const songElement = songComponent(div);
    songElement.addEventListener('click', () => {
    });
    tracklist.appendChild(songElement);
  });
});

const setCurrentSong = (child) => {
  removeAllChild(currentSong);
  currentSong.appendChild(child);
}

if (storage.getItem('#current_song')) {
  const data = storage.getItem('#current_song'); 
  setCurrentSong(currentSongComponent(data));
}

