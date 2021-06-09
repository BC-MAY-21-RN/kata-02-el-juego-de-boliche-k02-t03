class Frame {

  constructor(numberOfFrame) {
    this.score = 0;
    this.frame = numberOfFrame;
    this.strike = false;
    this.spare = false;
    this.extraRoll = numberOfFrame === 10;
    this.extraScore = 0;
    this.firstScore = 0;
    this.secondScore = 0;
    this.tries = 0;
  }

  roll(pins) {
    ++this.tries;
    if (this.tries === 1) {
      this.firstScore = pins;
    } else {
      this.secondScore = pins;
      if ((this.spare || this.strike) && this.extraRoll) {
        this.extraScore = pins;
      }
    }
    this.score += pins;
  }

  calculateScore() {
    if (this.firstScore === 10 && this.secondScore === 0) {
      this.strike = true;
    }
    if (this.score === 10 && this.secondScore !== 0) {
      this.spare = true;
    }
  }

  addScore(score) {
    this.score += score;
  }

  setScore(score) {
    this.score = score;
  }

}

module.exports = Frame;