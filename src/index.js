/* eslint-disable linebreak-style */
import './style.css';
import Score from './modules/Api.js';

const newScore = new Score();
const addNewScore = document.querySelector('.add-new-score');
addNewScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = addNewScore.name.value;
  const scoreNumber = addNewScore.score.value;
  newScore.addScore({ user, scoreNumber });
  addNewScore.name.value = '';
  addNewScore.score.value = '';
});

const refreshButton = document.querySelector('.refresh-button');
refreshButton.addEventListener('click', newScore.fetchScore);