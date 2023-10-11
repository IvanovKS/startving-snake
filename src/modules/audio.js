import audioFood from '../audio/eatingFood.mp3';
import gameOver from '../audio/gameOver.mp3';

const audioEating = new Audio(audioFood);
const endOfGame = new Audio(gameOver);
endOfGame.volume = 0.6;
audioEating.volume = 0.6;

const audioArr = [audioEating, endOfGame];

export default audioArr;
