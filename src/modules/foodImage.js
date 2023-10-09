class FoodImage {
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

export default FoodImage;
