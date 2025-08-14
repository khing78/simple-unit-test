import {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  addToAllInPlace,
} from '../../../src/answers/math/math';

describe('math.ts', () => {
  describe('add', () => {
    it('adds 2 + 3 to equal 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('result should be greater than 4', () => {
      expect(add(2, 3)).toBeGreaterThan(4);
    });

    it('result should be truthy', () => {
      expect(add(1, 1)).toBeTruthy();
    });
  });

  describe('subtract', () => {
    it('subtracts 5 - 2 to equal 3', () => {
      expect(subtract(5, 2)).toBe(3);
    });

    it('result should be less than 4', () => {
      expect(subtract(5, 2)).toBeLessThan(4);
    });
  });

  describe('multiply', () => {
    it('multiplies 4 * 3 to equal 12', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    it('result should be greater than 10', () => {
      expect(multiply(4, 3)).toBeGreaterThan(10);
    });
  });

  describe('divide', () => {
    it('divides 10 / 2 to equal 5', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });

    it('result should be truthy when not dividing by zero', () => {
      expect(divide(6, 2)).toBeTruthy();
    });
  });

  describe('isEven', () => {
    it('returns true for even number', () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(4)).toBeTruthy();
    });

    it('returns false for odd number', () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(3)).toBeFalsy();
    });
  });

  describe('addToAllInPlace', () => {
    it('adds 2 to each element in [1, 2, 3]', () => {
      const arr = [1, 2, 3];
      expect(addToAllInPlace(arr, 2)).toEqual([3, 4, 5]);
    });

    it('returns the same array reference', () => {
      const arr = [1, 2, 3];
      const result = addToAllInPlace(arr, 1);
      expect(result).toBe(arr);
    });

    it('works with empty array', () => {
      const arr: number[] = [];
      expect(addToAllInPlace(arr, 10)).toEqual([]);
    });

    it('adds negative number', () => {
      const arr = [5, 0, -5];
      expect(addToAllInPlace(arr, -2)).toEqual([3, -2, -7]);
    });

    it('result contains the added value', () => {
      const arr = [1, 2, 3];
      const result = addToAllInPlace(arr, 5);
      expect(result).toContain(6);
      expect(result).toContain(7);
      expect(result).toContain(8);
    });

    it('result has correct length', () => {
      const arr = [10, 20, 30, 40];
      const result = addToAllInPlace(arr, 1);
      expect(result).toHaveLength(4);
    });
  });
});
