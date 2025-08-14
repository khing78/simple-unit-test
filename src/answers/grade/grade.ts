// Final grade is summary of work, midterm, and final exam scores
// A for total >= 80
// B for total >= 70
// C for total >= 60
// D for total >= 50
// F for total < 50
// Example:
// work = 16, midterm = 21, final = 45 → total = 82 → A

export const MAX_WORK_SCORE = 20;
export const MAX_MIDTERM_SCORE = 30;
export const MAX_FINAL_SCORE = 50;

export function calculateWorkScore(score: number): number {
  return Math.max(0, Math.min(score, MAX_WORK_SCORE));
}

export function calculateMidtermScore(score: number): number {
  return Math.max(0, Math.min(score, MAX_MIDTERM_SCORE));
}

export function calculateFinalExamScore(score: number): number {
  return Math.max(0, Math.min(score, MAX_FINAL_SCORE));
}

export function getLetterGrade(total: number): string {
  if (total >= 80) return 'A';
  if (total >= 70) return 'B';
  if (total >= 60) return 'C';
  if (total >= 50) return 'D';
  return 'F';
}

export function calculateFinalGrade({
  work,
  midterm,
  final,
}: {
  work: number;
  midterm: number;
  final: number;
}): string {
  const total =
    calculateWorkScore(work) +
    calculateMidtermScore(midterm) +
    calculateFinalExamScore(final);
  return getLetterGrade(total);
}
