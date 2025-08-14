// src/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
  // throw new Error('Not implemented');
}

export function multiply(a: number, b: number): number {
  return a * b;
  // throw new Error('Not implemented');
}

export function divide(a: number, b: number): number {
  return b !== 0
    ? a / b
    : (() => {
        throw new Error('Cannot divide by zero');
      })();
  // throw new Error('Not implemented');
}

export function isEven(n: number): boolean {
  return n % 2 === 0;
  // throw new Error('Not implemented');
}

export function addToAllInPlace(arr: number[], n: number): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
  // throw new Error('Not implemented');
}
