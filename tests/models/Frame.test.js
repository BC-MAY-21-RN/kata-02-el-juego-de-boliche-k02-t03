const Frame = require('../../src/models/Frame');

describe('Tests in Frame model class', () => {
  test('spare should be true with 5 and 5 pins', () => {
    const frame = new Frame(1);
    frame.roll(5);
    frame.roll(5);
    frame.calculateScore();
    expect(frame.spare).toBe(true);
  });

  test('6 and 4 (10, spare) should add the first roll (5) of the next frame and get a score of 15', () => {
    const firstFrame = new Frame(1);
    firstFrame.roll(6);
    firstFrame.roll(4);
    firstFrame.calculateScore();
    const secondFrame = new Frame(2);
    secondFrame.roll(5);
    secondFrame.roll(5);
    secondFrame.calculateScore();
    if (firstFrame.spare) {
      firstFrame.addScore(secondFrame.firstScore);
    }
    expect(firstFrame.score).toBe(15);
  });


  test('strike should be false with 5 and 5 pins', () => {
    const frame = new Frame(1);
    frame.roll(5);
    frame.roll(5);
    frame.calculateScore();
    expect(frame.strike).toBe(false);
  });

  test('strike should be true with 10 pins at first try', () => {
    const frame = new Frame(1);
    frame.roll(10);
    frame.roll(0);
    frame.calculateScore();
    expect(frame.strike).toBe(true);
  });

  test('10 (strike) should add the next two balls rolled (5 and 4) and get a score of 19', () => {
    const firstFrame = new Frame(1);
    firstFrame.roll(10);
    firstFrame.roll(0);
    firstFrame.calculateScore();
    const secondFrame = new Frame(2);
    secondFrame.roll(5);
    secondFrame.roll(4);
    secondFrame.calculateScore();
    if (firstFrame.strike) {
      firstFrame.addScore(secondFrame.firstScore + secondFrame.secondScore);
    }
    expect(firstFrame.score).toBe(19);
  });

  test('spare should be false with 10 pins at first try', () => {
    const frame = new Frame(1);
    frame.roll(10);
    frame.roll(0);
    frame.calculateScore();
    expect(frame.spare).toBe(false);
  });

  test('score should be 5 with 1 and 4 pins', () => {
    const frame = new Frame(1);
    frame.roll(1);
    frame.roll(4);
    frame.calculateScore();
    expect(frame.score).toBe(5);
  });

  test('next frame score should start with the previous game score', () => {
    const firstFrame = new Frame(1);
    firstFrame.roll(1);
    firstFrame.roll(4);
    firstFrame.calculateScore();
    const secondFrame = new Frame(2);
    secondFrame.addScore(firstFrame.score);
    expect(secondFrame.score).toBe(firstFrame.score);
  });
});
