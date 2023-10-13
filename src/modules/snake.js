export const snake = [];
snake[0] = {
  x: 11 * 40,
  y: 6 * 40,
};

export function eatTail(head, arr, timer, audio1, audio2, func) {
  for (let i = 0; i < arr.length; i += 1) {
    if (head.x === arr[i].x && head.y === arr[i].y) {
      clearInterval(timer);
      audio1.play();
      audio2.pause();
      func();
    }
  }
}

export function winner(current, best) {
  const num1 = Number(current);
  const num2 = Number(best);
  if (num1 >= num2) {
    localStorage.setItem('winner', num1);
  }
}
