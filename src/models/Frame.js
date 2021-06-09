class Frame {

  constructor(numberOfFrame) {
    this.score = 0;
    this.frame = numberOfFrame;
    this.strike = false;
    this.spare = false;
    this.extraRoll = false;
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
      if (this.spare || this.strike) {
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
    console.log({
      frame: this.frame,
      tries: this.tries,
      first: this.firstScore,
      second: this.secondScore,
      extra: this.extraRoll,
      score: this.score,
      spare: this.spare,
      strike: this.strike
    })
  }

  addScore(score) {
    this.score += score;
  }

  setScore(score) {
    this.score = score;
  }

}

module.exports = Frame;