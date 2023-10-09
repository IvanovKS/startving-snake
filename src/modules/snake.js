export const snake = [];
snake[0] = {
  x: 11 * 40,
  y: 6 * 40,
};

export function eatTail(head, arr, timer) {
  for (let i = 0; i < arr.length; i += 1) {
    if (head.x === arr[i].x && head.y === arr[i].y) {
      clearInterval(timer);
    }
  }
}
