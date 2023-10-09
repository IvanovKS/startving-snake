import '@babel/polyfill';
import './index.html';
import './index.scss';
import banana from './img/banana.png';
import cherries from './img/cherries.png';
import grape from './img/grape.png';
import pear from './img/pear.png';
import plum from './img/plum.png';
import orange from './img/orange.png';
import mango from './img/mango.png';
import watermelon from './img/watermelon.png';
import apple from './img/apple_.png';
import peach from './img/peach.png';
import pineapple from './img/pineapple.png';
import strawberry from './img/strawberry.png';
import Food from './modules/food';

const fruitsArr = [
  banana, cherries, grape, pear, plum, orange,
  mango, watermelon, apple, peach, pineapple, strawberry];

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const currentFood = new Food(fruitsArr);

const foodImg = new Image();
foodImg.src = currentFood.getRandomFood();

const box = 40;

const food = {
  x: Math.floor((Math.random() * 22 + 1)) * box,
  y: Math.floor((Math.random() * 12 + 1)) * box,
};

function drawGame() {
  ctx.drawImage(foodImg, food.x, food.y, box, box);
}

setInterval(drawGame, 100);
