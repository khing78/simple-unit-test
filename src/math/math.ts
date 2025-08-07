
// src/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  // TODO: return a - b
  return a - b;
  // throw new Error('Not implemented');
}

export function multiply(a: number, b: number): number {
  // TODO: return a * b
  return a * b;
  // throw new Error('Not implemented');
}

export function divide(a: number, b: number): number {
  // TODO: return a / b (handle divide by zero)
  return b !== 0 ? a / b : (() => { throw new Error('Cannot divide by zero'); })();
  // throw new Error('Not implemented');
}

export function isEven(n: number): boolean {
  // TODO: return true if n is even
  return n % 2 === 0;
  // throw new Error('Not implemented');
}

export function addToAllInPlace(arr: number[], n: number): number[] {
  // TODO: add n to each element in arr in place
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
  // throw new Error('Not implemented');
}
