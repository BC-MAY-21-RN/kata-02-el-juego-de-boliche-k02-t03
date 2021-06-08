class Frame {

  constructor(numberOfFrame, initialScore = 0) {
    this.score = initialScore;
    this.strike = false;
    this.spare = false;
    this.extraRoll = numberOfFrame === 10;
    this.firstScore = 0;
    this.secondScore = 0;
  }

  roll(firstScore, secondScore) {
    this.firstScore = firstScore;
    this.secondScore = secondScore;
  }

  calculateScore() {
    if (this.firstScore + this.secondScore !== 10) {
      this.score += this.firstScore + this.secondScore;
    } else if (this.firstScore + this.secondScore === 10) {
      this.score += this.firstScore + this.secondScore;
      this.spare = true;
    } else if (this.firstScore === 10) {
      this.score += this.firstScore + this.secondScore;
      this.strike = true;
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