import {
  add,
  subtract,
  multiply,
  divide,
  isEven,
} from '../../src/math/math';

describe('math.ts', () => {
  describe('add', () => {
    it('adds 2 + 3 to equal 5', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(5);
    });
  });

  describe('subtract', () => {
    it('subtracts 5 - 2 to equal 3', () => {
      expect(subtract(5, 2)).toBe(3);
    });
  });

  describe('multiply', () => {
    it('multiplies 4 * 3 to equal 12', () => {
      expect(multiply(4, 3)).toBe(12);
    });
  });

  describe('divide', () => {
    it('divides 10 / 2 to equal 5', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('isEven', () => {
    it('returns true for even number', () => {
      expect(isEven(4)).toBe(true);
    });

    it('returns false for odd number', () => {
      expect(isEven(3)).toBe(false);
    });
  });
});
