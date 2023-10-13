export class FoodImage {
  constructor(arr, x, y) {
    this.arr = arr;
    this.x = x;
    this.y = y;
    this.randomIndex = Math.floor(Math.random() * ((arr.length - 1) + 1));
  }

  getRandomFood() {
    return this.arr[this.randomIndex];
  }
}

export function generateFoodCoordinates(body, func, width, height) {
  let foodX;
  let foodY;
  do {
    foodX = func(width);
    foodY = func(height);
  } while (body.some((segment) => segment.x === foodX && segment.y === foodY));
  return { x: foodX, y: foodY };
}
