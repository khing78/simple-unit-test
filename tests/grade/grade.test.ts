import { calculateWorkScore, MAX_WORK_SCORE, calculateMidtermScore, MAX_MIDTERM_SCORE, calculateFinalExamScore, MAX_FINAL_SCORE, getLetterGrade, calculateFinalGrade } from "../../src/grade/grade";

// tests/grade.test.ts
describe('calculateWorkScore', () => {
  it('should return score if within range', () => {
    expect(calculateWorkScore(15)).toBe(15);
  });

  it('should cap score at MAX_WORK_SCORE', () => {
    expect(calculateWorkScore(25)).toBe(MAX_WORK_SCORE);
  });

  it('should return 0 for negative score', () => {
    expect(calculateWorkScore(-5)).toBe(0);
  });
});

describe('calculateMidtermScore', () => {
  it('should return score if within range', () => {
    expect(calculateMidtermScore(20)).toBe(20);
  });

  it('should cap score at MAX_MIDTERM_SCORE', () => {
    expect(calculateMidtermScore(35)).toBe(MAX_MIDTERM_SCORE);
  });

  it('should return 0 for negative score', () => {
    expect(calculateMidtermScore(-10)).toBe(0);
  });
});

describe('calculateFinalExamScore', () => {
  it('should return score if within range', () => {
    expect(calculateFinalExamScore(40)).toBe(40);
  });

  it('should cap score at MAX_FINAL_SCORE', () => {
    expect(calculateFinalExamScore(100)).toBe(MAX_FINAL_SCORE);
  });

  it('should return 0 for negative score', () => {
    expect(calculateFinalExamScore(-20)).toBe(0);
  });
});

describe('getLetterGrade', () => {
  it('should return A for total >= 80', () => {
    expect(getLetterGrade(85)).toBe('A');
  });

  it('should return B for total >= 70 and < 80', () => {
    expect(getLetterGrade(75)).toBe('B');
  });

  it('should return C for total >= 60 and < 70', () => {
    expect(getLetterGrade(65)).toBe('C');
  });

  it('should return D for total >= 50 and < 60', () => {
    expect(getLetterGrade(55)).toBe('D');
  });

  it('should return F for total < 50', () => {
    expect(getLetterGrade(45)).toBe('F');
  });
});

describe('calculateFinalGrade', () => {
  it('should return A for full score', () => {
    expect(
      calculateFinalGrade({ work: 20, midterm: 30, final: 50 })
    ).toBe('A');
  });

  it('should return C for medium score', () => {
    expect(
      calculateFinalGrade({ work: 10, midterm: 20, final: 30 })
    ).toBe('C');
  });

  it('should clamp scores over max and return A', () => {
    expect(
      calculateFinalGrade({ work: 999, midterm: 999, final: 999 })
    ).toBe('A');
  });

  it('should handle negative scores and return F', () => {
    expect(
      calculateFinalGrade({ work: -10, midterm: -20, final: -30 })
    ).toBe('F');
  });

  it('should return correct grade near boundary', () => {
    expect(
      calculateFinalGrade({ work: 20, midterm: 20, final: 39 }) // total = 79
    ).toBe('B');

    expect(
      calculateFinalGrade({ work: 20, midterm: 20, final: 40 }) // total = 80
    ).toBe('A');
  });
});
