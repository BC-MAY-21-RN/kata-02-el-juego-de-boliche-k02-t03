const Frame = require('./Frame');

class Game {

  constructor() {
    this.frames = [];
  }

  init() {
    // Initial with spare
    let firstScore = 5;
    let secondScore = 5;
    // First frame
    this.frames.push(new Frame(1));
    this.frames[0].roll(firstScore);
    this.frames[0].roll(secondScore);
    this.frames[0].calculateScore();
    for (let i = 1; i < 10; i++) {
      firstScore = Math.floor(Math.random() * (10 - 0) + 0);
      secondScore = Math.floor(Math.random() * ((10 - firstScore) - 0) + 0);
      if (this.frames[i - 1].spare) {
        this.frames[i - 1].addScore(firstScore);
      }
      if (this.frames[i - 1].strike) {
        this.frames[i - 1].addScore(firstScore + secondScore);
      }
      this.frames.push(new Frame(2));
      this.frames[i].roll(firstScore);
      this.frames[i].roll(secondScore);
      this.frames[i].calculateScore();
      this.frames[i].addScore(this.frames[i - 1].score);
    }
    for (let i = 0; i < 10; i++) {
      console.log(`Frame ${i + 1}:`, this.frames[i].score);
    }
    return;
  }

}

module.exports = Game;