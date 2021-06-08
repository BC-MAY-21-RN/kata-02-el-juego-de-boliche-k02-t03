const Frame = require('./Frame');

class Game {

  constructor() {
    this.frames = [];
  }

  init() {

    let firstScore;
    let secondScore;

    // First frame
    this.frames.push(new Frame(1, 0));
    firstScore = 1;
    secondScore = 4;
    this.frames[0].roll(firstScore, secondScore);
    this.frames[0].calculateScore();
    let actualScore = this.frames[0].score;

    // Second frame
    this.frames.push(new Frame(2, actualScore));
    firstScore = 4;
    secondScore = 5;
    if (this.frames[0].spare) {
      this.frames[0].addScore(firstScore);
    } else if (this.frames[0].strike) {
      this.frames[0].addScore(secondScore);
    }
    actualScore = this.frames[0].score;
    this.frames[1].roll(firstScore, secondScore);
    this.frames[1].calculateScore();
    actualScore = this.frames[1].score;

    // Third frame
    this.frames.push(new Frame(3, actualScore));
    firstScore = 6;
    secondScore = 4;
    if (this.frames[1].spare) {
      this.frames[3].addScore(this.frames[2].secondScore);
    } else if (this.frames[2].strike) {
      this.frames[3].addScore(this.frames[2].secondScore);
    }
    actualScore = this.frames[1].score;
    this.frames[2].roll(firstScore, secondScore);
    this.frames[2].calculateScore();
    actualScore = this.frames[2].score;

    // Fourth frame
    this.frames.push(new Frame(4, actualScore));
    firstScore = 5;
    secondScore = 5;
    if (this.frames[2].spare) {
      this.frames[3].addScore(this.frames[3].firstScore);
    } else if (this.frames[2].strike) {
      this.frames[3].addScore(this.frames[3].secondScore);
    }
    actualScore = this.frames[2].score;
    this.frames[3].setScore(actualScore);
    this.frames[3].roll(firstScore, secondScore);
    this.frames[3].calculateScore();
    actualScore = this.frames[3].score;

    // Fifth frame
    this.frames.push(new Frame(5, actualScore));
    firstScore = 0;
    secondScore = 10;
    if (this.frames[3].spare) {
      this.frames[3].addScore(this.frames[4].firstScore);
    } else if (this.frames[3].strike) {
      this.frames[3].addScore(this.frames[4].secondScore);
    }
    actualScore = this.frames[3].score;
    this.frames[4].setScore(actualScore);
    this.frames[4].roll(firstScore, secondScore);
    this.frames[4].calculateScore();

    // Sixth frame
    this.frames.push(new Frame(5, actualScore));
    firstScore = 0;
    secondScore = 1;
    if (this.frames[4].spare) {
      this.frames[4].addScore(firstScore);
    } else if (this.frames[3].strike) {
      this.frames[4].addScore(secondScore);
    }
    actualScore = this.frames[3].score;
    this.frames[4].setScore(actualScore);
    this.frames[4].roll(firstScore, secondScore);
    this.frames[4].calculateScore();
    actualScore = this.frames[4].score;
    console.log(this.frames[0].score)
    console.log(this.frames[1].score)
    console.log(this.frames[2].score)
    console.log(this.frames[3].score)
    console.log(this.frames[4].score)
    console.log(this.frames[5].score)

  }

}

module.exports = Game;