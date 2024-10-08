import { describe, it, expect } from 'vitest';
import { checkIfOdd } from './index';

describe('checkIfOdd', () => {
    it('should return true for odd numbers', () => {
        expect(checkIfOdd(1)).toBe(true);
        expect(checkIfOdd(3)).toBe(true);
    });

    it('should return false for even numbers', () => {
        expect(checkIfOdd(2)).toBe(false);
        expect(checkIfOdd(4)).toBe(false);
    });

    it('should return false for zero', () => {
        expect(checkIfOdd(0)).toBe(false);
    });
});
