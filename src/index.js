/* eslint-disable linebreak-style */
import './styles.css';
import { addEntry, getEntry } from './modules/API.js';

const refresh = document.querySelector('.refreshBtn');
const form = document.querySelector('.entryContainer');
const nameValue = document.querySelector('.nameInput');
const scoreValue = document.querySelector('.scoreInput');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  addEntry(nameValue.value, scoreValue.value);
  document.querySelector('.nameInput').value = '';
  document.querySelector('.scoreInput').value = '';
});

refresh.addEventListener('click', getEntry);