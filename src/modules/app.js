/* eslint-disable linebreak-style */
const displayList = (gameData) => {
  const gameScore = document.querySelector('.scoreBoardContainer');
  gameScore.innerHTML = '';
  gameData.sort((a, b) => b.score - a.score);
  gameData.forEach((item) => {
    gameScore.innerHTML
      += `<p>${item.user} : ${item.score} </p>`;
  });
};
export default displayList;