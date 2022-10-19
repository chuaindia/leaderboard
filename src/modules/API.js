/* eslint-disable linebreak-style */
import displayList from './app.js';

const addEntry = async (user, score) => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameID = 'Pk5uoKBoacOJcYrWGAJB';
  const response = await fetch(`${url}${gameID}/scores/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ user, score }),
  });
  const res = await response.json();
  return res;
};

const getEntry = async () => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameID = 'Pk5uoKBoacOJcYrWGAJB';
  const response = await fetch(`${url}${gameID}/scores/`);
  const res = await response.json();
  if (response.ok) {
    displayList(res.result);
  }
};

export { addEntry, getEntry };