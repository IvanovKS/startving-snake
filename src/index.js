import '@babel/polyfill';
import './index.html';
import './index.scss';
import FoodImage from './modules/foodImage';
import fruitsArr from './modules/arrays';
import { snake, eatTail } from './modules/snake';

const CANVAS = document.querySelector('#canvas');
const ctx = CANVAS.getContext('2d');
const box = 40;
const squareWidth = 22;
const squareHeight = 12;
const randomCoord = (num) => Math.floor((Math.random() * num + 1)) * box;

let currentFood = new FoodImage(fruitsArr, randomCoord(squareWidth), randomCoord(squareHeight));

let foodImg = new Image();
foodImg.src = currentFood.getRandomFood();

let score = 0;

let dir;

function direction(event) {
  if (event.keyCode === 37 && dir !== 'right') {
    dir = 'left';
  } else if (event.keyCode === 38 && dir !== 'down') {
    dir = 'up';
  } else if (event.keyCode === 39 && dir !== 'left') {
    dir = 'right';
  } else if (event.keyCode === 40 && dir !== 'up') {
    dir = 'down';
  }
}
document.addEventListener('keydown', direction);

function generateFoodCoordinates(body, width, height) {
  let foodX;
  let foodY;
  do {
    foodX = randomCoord(width);
    foodY = randomCoord(height);
  } while (body.some((segment) => segment.x === foodX && segment.y === foodY));
  return { x: foodX, y: foodY };
}

function drawGame() {
  ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
  ctx.drawImage(foodImg, currentFood.x, currentFood.y, box, box);

  for (let i = 0; i < snake.length; i += 1) {
    ctx.fillStyle = i === 0 ? 'black' : 'red';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX < 0 || snakeX > squareWidth * box || snakeY < 0 || snakeY > squareHeight * box) {
    clearInterval(game);
  }

  if (dir === 'left') snakeX -= box;
  if (dir === 'right') snakeX += box;
  if (dir === 'up') snakeY -= box;
  if (dir === 'down') snakeY += box;

  if (snakeX === currentFood.x && snakeY === currentFood.y) {
    score += 1;

    const newFoodCoordinates = generateFoodCoordinates(snake, squareWidth, squareHeight);

    const newX = newFoodCoordinates.x;
    const newY = newFoodCoordinates.y;

    currentFood = new FoodImage(fruitsArr, newX, newY);

    foodImg = new Image();
    foodImg.src = currentFood.getRandomFood();
    currentFood.x = newX;
    currentFood.y = newY;
  } else {
    snake.pop();
  }

  const newHead = {
    x: snakeX,
    y: snakeY,
  };
  eatTail(newHead, snake, game);

  snake.unshift(newHead);
}

let game = setInterval(drawGame, 100);
