import audioFood from '../audio/eatingFood.mp3';
import gameOver from '../audio/gameOver.mp3';
import bg from '../audio/bg.mp3';
import btn from '../audio/btn.mp3';

const audioEating = new Audio(audioFood);
const endOfGame = new Audio(gameOver);
const backgroundAudio = new Audio(bg);
const buttons = new Audio(btn);
endOfGame.volume = 0.2;
audioEating.volume = 0.6;
backgroundAudio.volume = 0.1;
backgroundAudio.loop = true;

const audioArr = [audioEating, endOfGame, backgroundAudio, buttons];

export default audioArr;
