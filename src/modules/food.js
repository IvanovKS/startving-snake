class Food {
  constructor(arr) {
    this.arr = arr;
    this.randomIndex = Math.floor(Math.random() * ((arr.length - 1) + 1));
  }

  getRandomFood() {
    return this.arr[this.randomIndex];
  }
}

export default Food;
